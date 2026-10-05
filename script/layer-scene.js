import {AmbientLight, CubicBezierCurve3, DirectionalLight, ExtrudeGeometry, Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, OrthographicCamera, Scene, Shape, SphereGeometry, TubeGeometry, Vector3, WebGLRenderer} from 'three';

export async function createConnections(host, layers, onFailure) {
  const canvas = document.createElement('canvas'); canvas.className = 'architecture-canvas'; canvas.setAttribute('aria-hidden','true');
  const small = matchMedia('(pointer:coarse)').matches || (navigator.deviceMemory && navigator.deviceMemory <= 4);
  const renderer = new WebGLRenderer({canvas,alpha:true,antialias:!small,powerPreference:'low-power',failIfMajorPerformanceCaveat:true,stencil:false});
  renderer.setClearColor(0x080b12,0);
  const scene = new Scene(), camera = new OrthographicCamera(-1,1,1,-1,1,2000);
  camera.position.z = 1000;
  scene.add(new AmbientLight(0x9dbfff,1.4));
  const light = new DirectionalLight(0xb6d7ff,2.2); light.position.set(-300,500,800); scene.add(light);
  const face = new MeshLambertMaterial({color:0x111e32}), edge = new MeshLambertMaterial({color:0x32578a});
  const active = new MeshLambertMaterial({color:0x274b72}), blue = new MeshBasicMaterial({color:0x527bae});
  const cyan = new MeshBasicMaterial({color:0x62ddf5});
  const sphere = new SphereGeometry(3,8,6), packet = new Mesh(sphere,cyan); packet.visible=false; scene.add(packet);
  const boards = layers.map(() => { const group=new Group(); scene.add(group); return {group,mesh:null,key:''}; });
  let width=0,height=0,disposed=false,ready=false,enabled=true,paused=false,frame=0,timer=0,frames=0;
  let selected=0,route=0,reverse=false,duration=1100,start=0,last=0,slow=0,px=0,py=0,position=0;
  let curves=[],tubes=[],layoutKey='';
  const point=new Vector3(), interval=1000/(small?24:30), pixelLimit=small?240000:450000;
  const resize=new ResizeObserver(()=> {if(ready&&enabled) refresh();});
  const lost=event=> {event.preventDefault(); fail(new Error('WebGL context lost'));};
  canvas.addEventListener('webglcontextlost',lost);
  function stats() {canvas.dataset.frames=frames; canvas.dataset.drawCalls=renderer.info.render.calls;canvas.dataset.triangles=renderer.info.render.triangles;}
  function stop() {cancelAnimationFrame(frame);clearTimeout(timer);frame=timer=0;stats();}
  function dispose() {
    if(disposed)return;disposed=true;stop();resize.disconnect();canvas.removeEventListener('webglcontextlost',lost);
    boards.forEach(board=>board.mesh?.geometry.dispose());tubes.forEach(tube=>tube.geometry.dispose());sphere.dispose();
    [face,edge,active,blue,cyan].forEach(material=>material.dispose());renderer.dispose();renderer.forceContextLoss();canvas.remove();
    layers.forEach(layer=>layer.style.removeProperty('--surface-transform'));
  }
  function fail(error) {if(disposed)return;dispose();if(ready)onFailure(error);}
  function safe(action) {if(disposed)return;try{action();}catch(error){fail(error);}}
  function geometry(w,h) {
    const x=-w/2,y=-h/2,r=9,s=new Shape();
    s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);
    s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);
    return new ExtrudeGeometry(s,{depth:10,bevelEnabled:false,curveSegments:4}).translate(0,0,-10);
  }
  function layout() {
    const bounds=host.getBoundingClientRect(),w=bounds.width,h=bounds.height;if(!w||!h)return false;
    const metrics=layers.map(layer=>{const style=getComputedStyle(layer);return [style.left,style.top,style.width,style.height].map(parseFloat);});
    const key=JSON.stringify([w,h,devicePixelRatio,metrics,px,py]);if(key===layoutKey)return false;layoutKey=key;width=w;height=h;
    const scale=Math.min(devicePixelRatio||1,small?1:1.25,Math.sqrt(pixelLimit/(w*h)));
    renderer.setSize(Math.floor(w*scale),Math.floor(h*scale),false);
    camera.left=-w/2;camera.right=w/2;camera.top=h/2;camera.bottom=-h/2;camera.updateProjectionMatrix();
    const ports=metrics.map(([left,top,bw,bh],i)=> {
      const board=boards[i],size=`${bw}:${bh}`;
      if(board.key!==size){board.mesh?.geometry.dispose();if(board.mesh)board.group.remove(board.mesh);board.mesh=new Mesh(geometry(bw,bh),[face,edge]);board.group.add(board.mesh);board.key=size;}
      board.group.position.set(left+bw/2-w/2,h/2-top-bh/2,i*90);
      const angle=-parseFloat(getComputedStyle(layers[i]).getPropertyValue('--layer-angle'));
      board.group.rotation.set((9+py)*Math.PI/180,(-12+px)*Math.PI/180,angle*Math.PI/180);board.group.updateMatrixWorld(true);
      const m=board.group.matrixWorld.elements;
      layers[i].style.setProperty('--surface-transform',`matrix(${m[0]},${-m[1]},${-m[4]},${m[5]},0,0)`);
      return new Vector3((i===1?-1:1)*(bw/2+5),-bh*.20,0).applyMatrix4(board.group.matrixWorld);
    });
    tubes.forEach(tube=>{scene.remove(tube);tube.geometry.dispose();});tubes=[];
    curves=ports.slice(0,2).map((a,i)=> {
      const b=ports[i+1],rail=w*(i===0?.43:-.36),z=-18;
      const curve=new CubicBezierCurve3(a,new Vector3(rail,a.y,z),new Vector3(rail,b.y,z),b);
      const tube=new Mesh(new TubeGeometry(curve,24,1,4,false),blue);scene.add(tube);tubes.push(tube);return curve;
    });
    return true;
  }
  function measureAlignment() {
    const w=width,h=height,bounds=host.getBoundingClientRect();
    let alignment=0;
    boards.forEach((board,i)=> {
      const layer=layers[i],actual=layer.getBoundingClientRect();
      const style=getComputedStyle(layer),bw=parseFloat(style.width),bh=parseFloat(style.height);
      const corners=[[-1,-1],[-1,1],[1,-1],[1,1]].map(([x,y])=>new Vector3(x*bw/2,y*bh/2,0).applyMatrix4(board.group.matrixWorld));
      const predicted=[bounds.left+w/2+Math.min(...corners.map(p=>p.x)),bounds.top+h/2-Math.max(...corners.map(p=>p.y)),bounds.left+w/2+Math.max(...corners.map(p=>p.x)),bounds.top+h/2-Math.min(...corners.map(p=>p.y))];
      [actual.left,actual.top,actual.right,actual.bottom].forEach((value,j)=>{alignment=Math.max(alignment,Math.abs(value-predicted[j]));});
    });canvas.dataset.alignmentError=alignment.toFixed(3);
  }
  function render() {
    if(disposed||!width||!curves.length)return;
    boards.forEach((board,i)=>{board.mesh.material=[face,i===selected?active:edge];});
    tubes.forEach((tube,i)=>{tube.material=packet.visible&&i===route?cyan:blue;});
    curves[route].getPointAt(reverse?1-position:position,point);packet.position.copy(point);packet.position.z+=2;
    renderer.render(scene,camera);frames++;stats();measureAlignment();
  }
  function refresh() {if(enabled)safe(()=>{if(layout())render();});}
  function tick(now) {
    frame=0;if(disposed||!enabled||paused)return stop();
    const gap=last?now-last:interval;last=now;slow=gap>200?slow+1:Math.max(0,slow-1);
    if(slow>=4)return fail(new Error('Animation exceeded the frame-time budget'));
    const elapsed=Math.max(0,now-start);position=Math.min(1,elapsed/duration);safe(render);
    if(!disposed&&elapsed<duration)timer=setTimeout(()=>{timer=0;frame=requestAnimationFrame(tick);},interval);
    else {packet.visible=false;safe(render);stop();}
  }
  function pulse(index=selected,transition=null) {
    selected=index;route=transition?Math.min(transition.from,index):Math.min(index,1);reverse=!!transition&&transition.from>index;
    duration=transition?.duration||1100;position=0;packet.visible=!!transition;
    if(!enabled||disposed)return;stop();safe(()=>{layout();render();});
    if(paused||disposed||!transition)return;
    start=performance.now();last=slow=0;frame=requestAnimationFrame(tick);
  }
  try {layout();await renderer.compileAsync(scene,camera);if(disposed)throw new Error('3D initialization interrupted');ready=true;host.prepend(canvas);resize.observe(host);layers.forEach(layer=>resize.observe(layer));render();}
  catch(error){dispose();throw error;}
  return {pulse,refresh,dispose,orient(x,y){px=x;py=y;refresh();},setState(state){const previous=enabled;enabled=state.visible&&!document.hidden;paused=state.paused;if(!enabled||paused)stop();if(enabled&&!previous)refresh();}};
}
