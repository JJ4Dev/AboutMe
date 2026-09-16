import { AmbientLight, BoxGeometry, CubicBezierCurve3, DirectionalLight, Group, InstancedMesh, Matrix4, Mesh, MeshBasicMaterial, MeshLambertMaterial, OrthographicCamera, Scene, SphereGeometry, TubeGeometry, Vector3, WebGLRenderer } from 'three';

export async function createConnections(host, layers, onFailure) {
  const canvas = document.createElement('canvas');
  canvas.className = 'architecture-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  const renderer = new WebGLRenderer({ canvas, alpha:true, antialias:false, powerPreference:'low-power', failIfMajorPerformanceCaveat:true, stencil:false });
  renderer.setClearColor(0x080b12, 0);
  const scene = new Scene(), group = new Group();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 1, 2000);
  camera.position.z = 1000;
  scene.add(group, new AmbientLight(0x9dbfff, 1.5));
  const light = new DirectionalLight(0xffffff, 2.5);
  light.position.set(-200, 400, 600); scene.add(light);
  const blue = new MeshLambertMaterial({color:0x447abe});
  const cyan = new MeshBasicMaterial({color:0x62ddf5});
  const boardMaterial = new MeshLambertMaterial({color:0x182b48});
  const activeMaterial = new MeshLambertMaterial({color:0x203e5f});
  const boardGeometry = new BoxGeometry(1, 1, 1);
  const pinGeometry = new SphereGeometry(3.5, 8, 6);
  const packetGeometry = new SphereGeometry(3, 8, 6);
  const pins = new InstancedMesh(pinGeometry, blue, 3);
  const packet = new Mesh(packetGeometry, cyan);
  pins.frustumCulled = false;
  const boards = layers.map(() => new Mesh(boardGeometry, boardMaterial));
  group.add(pins, packet, ...boards);
  const matrix = new Matrix4(), point = new Vector3(), tubes = [];
  let curves = [], width = 0, height = 0, layoutKey = '';
  let disposed = false, ready = false, enabled = true, paused = false;
  let frame = 0, timer = 0, totalFrames = 0, selected = 0, started = 0, lastFrame = 0, slowFrames = 0;
  let route = 0, reverse = false, duration = 1200;
  const small = matchMedia('(pointer:coarse)').matches || (navigator.deviceMemory && navigator.deviceMemory <= 4);
  const pixelLimit = small ? 240000 : 450000, interval = 1000 / (small ? 24 : 30);
  const resize = new ResizeObserver(() => { if (enabled && ready) safely(() => refresh()); });
  const lost = event => { event.preventDefault(); fail(new Error('WebGL context lost')); };
  canvas.addEventListener('webglcontextlost', lost);

  function stats() {
    canvas.dataset.frames = String(totalFrames);
    canvas.dataset.drawCalls = String(renderer.info.render.calls);
    canvas.dataset.triangles = String(renderer.info.render.triangles);
  }
  function stop() { cancelAnimationFrame(frame); clearTimeout(timer); frame = timer = 0; stats(); }
  function clearPaths() { for (const tube of tubes.splice(0)) { group.remove(tube); tube.geometry.dispose(); } }
  function dispose() {
    if (disposed) return;
    disposed = true; stop(); resize.disconnect();
    canvas.removeEventListener('webglcontextlost', lost); clearPaths();
    pins.dispose(); boardGeometry.dispose(); pinGeometry.dispose(); packetGeometry.dispose();
    blue.dispose(); cyan.dispose(); boardMaterial.dispose(); activeMaterial.dispose();
    renderer.dispose(); renderer.forceContextLoss(); canvas.remove();
  }
  function fail(error) { if (disposed) return; dispose(); if (ready) onFailure(error); }
  function safely(action) { if (disposed) return; try { action(); } catch (error) { fail(error); } }
  function layout() {
    width = host.clientWidth; height = host.clientHeight;
    if (!width || !height) return false;
    const metrics = layers.map(layer => [layer.offsetLeft, layer.offsetTop, layer.offsetWidth, layer.offsetHeight]);
    const nextKey = JSON.stringify([width,height,devicePixelRatio,metrics]);
    if (nextKey === layoutKey) return false;
    layoutKey = nextKey;
    const scale = Math.min(devicePixelRatio || 1, small ? 1 : 1.25, Math.sqrt(pixelLimit / (width * height)));
    renderer.setSize(Math.max(1, Math.floor(width * scale)), Math.max(1, Math.floor(height * scale)), false);
    camera.left = -width / 2; camera.right = width / 2; camera.top = height / 2; camera.bottom = -height / 2;
    camera.updateProjectionMatrix(); clearPaths();
    const locations = metrics.map(([left,top,w,h], i) => {
      boards[i].position.set(left + w / 2 - width / 2 + 3, height / 2 - top - h / 2 - 7, 0);
      boards[i].scale.set(w + 11, h + 9, 12);
      boards[i].rotation.set(.035, -.035, [6,-5,5][i] * Math.PI / 180);
      return new Vector3(left + w * (i === 1 ? .02 : .94) - width / 2, height / 2 - top - h * .72, 12);
    });
    locations.forEach((position, i) => { matrix.makeTranslation(position.x,position.y,position.z); pins.setMatrixAt(i,matrix); });
    pins.instanceMatrix.needsUpdate = true;
    curves = locations.slice(0,2).map((start,i) => {
      const end = locations[i + 1], rail = width * (i === 0 ? .43 : -.34);
      const curve = new CubicBezierCurve3(start,new Vector3(rail,start.y,45),new Vector3(rail,end.y,45),end);
      const tube = new Mesh(new TubeGeometry(curve,24,.85,4,false),blue); tubes.push(tube); group.add(tube); return curve;
    });
    return true;
  }
  function render(progress = 0) {
    if (disposed || !width || !height || !curves.length) return;
    boards.forEach((board,i) => { board.material = i === selected ? activeMaterial : boardMaterial; });
    tubes.forEach((tube,i) => { tube.material = i === route ? cyan : blue; });
    const position = Math.max(0, Math.min(progress,1));
    curves[route].getPointAt(reverse ? 1 - position : position,point); packet.position.copy(point); packet.position.z += 3;
    renderer.render(scene,camera); totalFrames++; stats();
  }
  function refresh() { if (!enabled || disposed) return; safely(() => { if (layout()) render(); }); }
  function tick(now) {
    frame = 0; if (disposed || !enabled || paused) return stop();
    const gap = lastFrame ? now - lastFrame : interval; lastFrame = now;
    slowFrames = gap > 200 ? slowFrames + 1 : Math.max(0,slowFrames - 1);
    if (slowFrames >= 4) { fail(new Error('Animation exceeded the frame-time budget')); return; }
    const elapsed = Math.max(0, now - started);
    safely(() => render(elapsed / duration));
    if (!disposed && elapsed < duration) timer = setTimeout(() => { timer = 0; frame = requestAnimationFrame(tick); },interval);
    else stop();
  }
  function pulse(index = selected, transition = null) {
    selected = index; route = transition ? Math.min(transition.from, index) : Math.min(index,1);
    reverse = transition ? transition.from > index : false; duration = transition?.duration || 1200;
    if (!enabled || disposed) return; stop();
    safely(() => { layout(); render(); });
    if (paused || disposed) return;
    started = performance.now(); lastFrame = slowFrames = 0; frame = requestAnimationFrame(tick);
  }
  try {
    layout(); await renderer.compileAsync(scene,camera);
    if (disposed) throw new Error('3D initialization interrupted');
    ready = true; host.prepend(canvas);
    resize.observe(host); layers.forEach(layer => resize.observe(layer));
    render();
  } catch (error) { dispose(); throw error; }
  return { pulse, refresh, dispose, setState(state) {
    const previous = enabled; enabled = state.visible && !document.hidden; paused = state.paused;
    if (!enabled || paused) stop();
    if (enabled && !previous) refresh();
  }};
}
