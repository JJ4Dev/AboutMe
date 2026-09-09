const translations = {
  de: {
    skip: 'Zum Inhalt springen', navExpertise: 'Kompetenzen', navJourney: 'Werdegang', navAbout: 'Über mich', navContact: 'Kontakt',
    roleLocation: 'Software Engineer · Basel, Schweiz', heroLine1: 'Durchdachte Oberflächen.', heroLine2: 'Starke Grundlagen.',
    heroBody: 'Ich bin Jan. Ich entwickle Full-Stack-Software mit C# und .NET und verbinde die Systeme im Hintergrund mit dem Erlebnis auf dem Bildschirm.',
    explore: 'Meine Kompetenzen entdecken', scroll: 'Scrollen und entdecken', bigPicture: 'DAS GROSSE GANZE',
    expertiseLine1: 'Von der Oberfläche', expertiseLine2: 'bis zur Infrastruktur.', expertiseIntro: 'Was ich gerne miteinander verbinde.',
    cap0Title: 'Backend & Integrationen', cap0Body: 'Dienste, die Anwendungen, Daten und Geschäftsprozesse verbinden.',
    cap1Title: 'Weboberflächen', cap1Body: 'Responsive Oberflächen, wiederverwendbare Komponenten und durchdachte Interaktionen.',
    cap2Title: 'Daten & Cloud', cap2Body: 'Datenflüsse und Echtzeitfunktionen, die Anwendungen miteinander verbinden.',
    cap3Title: 'Modernisierung', cap3Body: 'Das bestehende System verstehen. Dem Problem auf den Grund gehen. Die nächste Version gezielt entwickeln.',
    modernTags: 'BESTEHENDE SYSTEME / MIGRATION / DEBUGGING', cap4Title: 'KI in Anwendungen',
    cap4Body: 'Agenten und Tools in Software einbinden, mit Blick auf Berechtigungen und Evaluation.', aiTags: 'AZURE OPENAI / AGENTEN / TOOL-INTEGRATION',
    connectedSystem: 'EIN VERBUNDENES SYSTEM', pause: 'Animationen pausieren', resume: 'Animationen fortsetzen',
    homeLabel: 'Jan Reist Startseite', navLabel: 'Hauptnavigation', languageLabel: 'Sprache',
    inProgress: 'IMMER IN BEWEGUNG', journeyLine1: 'Immer weiterlernen.', journeyLine2: 'Immer weiterentwickeln.',
    journeyIntro: 'Eine Grundlage in der Applikationsentwicklung. Eine Neugier, die weiter wächst.', microDates: '2023 — HEUTE',
    currentChapter: 'DAS AKTUELLE KAPITEL', microBody: 'Vom Junior Developer zum Software Engineer. Ich arbeite an .NET-Anwendungen, Integrationen und den Oberflächen, die alles zusammenbringen.',
    integrations: 'INTEGRATIONEN', foundation: 'DIE GRUNDLAGE', bellRole: 'Berufslehre Applikationsentwicklung',
    bellBody: 'Vier Jahre als Grundlage für die Softwareentwicklung: von Programmierung und Datenbanken bis zu Unternehmensanwendungen.', webDevelopment: 'WEBENTWICKLUNG',
    bmsTitle: 'Technische Berufsmaturität', efzTitle: 'Informatiker Applikationsentwicklung EFZ', behindCode: 'HINTER DEM CODE',
    humanFirst: 'MENSCH. MIT EINER LEIDENSCHAFT FÜR CODE.', aboutLine1: 'Von Natur aus neugierig.', aboutLine2: 'Ganz bewusst präzise.',
    aboutBody: 'Ich möchte verstehen, warum etwas funktioniert – und warum manchmal nicht. Ich gehe einem Problem durch Oberfläche, Daten und Backend auf den Grund. Danach feile ich an den Details, bis sich die Lösung stimmig anfühlt.',
    principle1: 'Die Ursache finden.', principle2: 'Das Ziel im Blick behalten.', principle3: 'Auf die Details achten.',
    languages: 'SPRACHEN', german: 'Deutsch', english: 'Englisch', learning: 'Weiterbildung', stayCurious: 'NEUGIERIG BLEIBEN',
    learningLine1: 'Immer einen', learningLine2: 'Schritt weiter.', learningIntro: 'Ausgewählte Zertifikate und Weiterbildungen.', aiLearning: 'KI-Agenten & Tools',
    fiveCourses: '5 KURSE', threeCourses: '3 KURSE', certified: 'ZERTIFIKAT', june2026: 'Juni 2026', april2026: 'April 2026',
    fceDate: 'Ausgestellt im Februar 2025.', azureDate: 'Microsoft Certified: Azure AI Fundamentals. Ausgestellt im August 2024.',
    sept2022: 'September 2022', aug2022: 'August 2022', july2022: 'Juli 2022', viewCredentials: 'Nachweise auf LinkedIn ansehen',
    contact: 'Kontakt', connectKicker: 'LASS UNS REDEN', contactLine1: 'Gute Software.', contactLine2: 'Gute Gespräche.',
    contactBody: 'Eine Idee, eine technische Herausforderung oder einfach Lust auf einen Austausch? Lass uns reden.', backTop: 'Nach oben',
    description: 'Jan Reist — Software Engineer in der Region Basel. C#/.NET, Full-Stack-Anwendungen, Integrationen und durchdachte Weboberflächen.'
  }, en: {}
};
document.querySelectorAll('[data-i18n]').forEach(el => { translations.en[el.dataset.i18n] = el.textContent; });
translations.en.resume = 'Resume motion';
translations.en.homeLabel = 'Jan Reist home';
translations.en.navLabel = 'Main navigation';
translations.en.languageLabel = 'Language';
translations.en.description = document.querySelector('meta[name="description"]').content;
const storage = { get: key => { try { return localStorage.getItem(key); } catch { return null; } }, set: (key, value) => { try { localStorage.setItem(key, value); } catch {} } };
let language = storage.get('reist-language') === 'de' ? 'de' : 'en';
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const savedMotion = storage.get('reist-motion');
let paused = savedMotion === 'paused' || (savedMotion !== 'playing' && reducedMotion.matches);
const motionButton = document.querySelector('#motion-toggle');
const translate = key => translations[language][key] || translations.en[key];
function updateMotionLabel() {
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.querySelector('[data-i18n]').textContent = translate(paused ? 'resume' : 'pause');
  motionButton.querySelector('.motion-indicator').textContent = paused ? '▷' : 'Ⅱ';
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-i18n]').forEach(el => { const value = translate(el.dataset.i18n); if (value) el.textContent = value; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', translate(el.dataset.i18nAria)));
  document.querySelector('meta[name="description"]').content = translate('description');
  document.querySelector('meta[property="og:description"]').content = translate('description');
  document.querySelectorAll('[data-language]').forEach(el => { el.classList.toggle('active', el.dataset.language === next); el.setAttribute('aria-pressed', String(el.dataset.language === next)); });
  updateMotionLabel();
  storage.set('reist-language', next);
}
document.querySelectorAll('[data-language]').forEach(el => el.addEventListener('click', () => setLanguage(el.dataset.language)));
const nodeNames = ['services', 'interface', 'cloud', 'data', 'ai'];
document.querySelectorAll('[data-capability]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-capability]').forEach(el => { const active = el === button; el.closest('.capability').classList.toggle('active', active); el.setAttribute('aria-expanded', String(active)); el.setAttribute('aria-disabled', String(active)); });
    const index = Number(button.dataset.capability);
    document.querySelectorAll('.system-node').forEach(el => el.classList.toggle('is-selected', el.classList.contains(`node-${nodeNames[index]}`)));
    const label = document.querySelector('.system-detail');
    label.dataset.i18n = `cap${index}Title`; label.textContent = translate(label.dataset.i18n);
    document.querySelector('.system-index').textContent = `0${index + 1}—05`;
  });
});
const canvas = document.querySelector('#core-canvas');
const ctx = canvas.getContext('2d');
let size = 0, frame = 0, time = 0, last = 0, inView = true;
const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
const mesh = [];
function cubePoint(face, u, v) {
  const p = face < 2 ? [face ? -1 : 1, u, v] : face < 4 ? [u, face === 3 ? -1 : 1, v] : [u, v, face === 5 ? -1 : 1];
  const rounded = .48 + .52 / Math.hypot(...p);
  return p.map(n => n * rounded);
}
for (let face = 0; face < 6; face++) {
  for (let a = 0; a <= 14; a++) for (let b = 0; b < 14; b++) {
    const u = -1 + a / 7, v = -1 + b / 7, w = -1 + (b + 1) / 7;
    mesh.push([cubePoint(face, u, v), cubePoint(face, u, w)], [cubePoint(face, v, u), cubePoint(face, w, u)]);
  }
}
function project(p) {
  const ry = time * .16 + .65 + pointer.x * .38, rx = .4 + Math.sin(time * .22) * .14 + pointer.y * .3;
  const x = p[0] * Math.cos(ry) + p[2] * Math.sin(ry), z = -p[0] * Math.sin(ry) + p[2] * Math.cos(ry);
  const y = p[1] * Math.cos(rx) - z * Math.sin(rx), depth = p[1] * Math.sin(rx) + z * Math.cos(rx);
  const c = Math.cos(-.17), s = Math.sin(-.17), scale = size * .24 * 4.5 / (4.5 - depth);
  return [size / 2 + (x * c - y * s) * scale, size / 2 + (x * s + y * c) * scale, depth];
}
function draw() {
  if (!ctx || !size) return;
  ctx.clearRect(0, 0, size, size);
  const glow = ctx.createRadialGradient(size * .5, size * .5, 0, size * .5, size * .5, size * .47);
  glow.addColorStop(0, 'rgba(100,155,255,.09)'); glow.addColorStop(1, 'rgba(100,155,255,0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 72; i++) {
    const angle = i / 72 * Math.PI * 2, inner = size * (i % 6 ? .46 : .447), outer = size * .468;
    ctx.strokeStyle = i % 6 ? '#1c2b42' : '#61718a'; ctx.lineWidth = 1; ctx.beginPath();
    ctx.moveTo(size / 2 + Math.cos(angle) * inner, size / 2 + Math.sin(angle) * inner); ctx.lineTo(size / 2 + Math.cos(angle) * outer, size / 2 + Math.sin(angle) * outer); ctx.stroke();
  }
  for (let orbit = 0; orbit < 3; orbit++) {
    ctx.beginPath(); ctx.strokeStyle = 'rgba(98,221,245,.15)'; ctx.lineWidth = .7;
    for (let n = 0; n <= 100; n++) { const angle = n / 100 * Math.PI * 2; const p = [Math.cos(angle) * 1.52, Math.sin(angle) * 1.52, 0]; if (orbit === 1) [p[1], p[2]] = [p[2], p[1]]; if (orbit === 2) [p[0], p[2]] = [p[2], p[0]]; const [x, y] = project(p); n ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
  }
  const segments = mesh.map(([a, b]) => [project(a), project(b)]).sort((a, b) => a[0][2] + a[1][2] - b[0][2] - b[1][2]);
  for (const [a, b] of segments) { const depth = (a[2] + b[2]) / 2; ctx.strokeStyle = `rgba(100,155,255,${.10 + (depth + 1.45) / 2.9 * .6})`; ctx.lineWidth = depth > .4 ? .9 : .6; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); }
  const [x, y] = project([Math.cos(time * .4) * 1.52, Math.sin(time * .4) * 1.52, 0]);
  ctx.shadowColor = '#649bff'; ctx.shadowBlur = 16; ctx.fillStyle = '#8ce5ff'; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
}
function tick(now) {
  frame = 0;
  if (paused || document.hidden || !inView) { last = 0; return; }
  if (last) time += Math.min((now - last) / 1000, .05); last = now;
  pointer.x += (pointer.targetX - pointer.x) * .04; pointer.y += (pointer.targetY - pointer.y) * .04;
  draw(); frame = requestAnimationFrame(tick);
}
function schedule() { if (ctx && !frame && !paused && !document.hidden && inView) frame = requestAnimationFrame(tick); }
function syncMotion() {
  document.documentElement.classList.toggle('motion-paused', paused);
  document.documentElement.classList.toggle('motion-enabled', !paused);
  document.querySelectorAll('.system-lines').forEach(svg => { if (paused) svg.pauseAnimations(); else svg.unpauseAnimations(); });
  if (paused) { cancelAnimationFrame(frame); frame = 0; last = 0; draw(); } else schedule();
  updateMotionLabel();
}
motionButton.addEventListener('click', () => { paused = !paused; storage.set('reist-motion', paused ? 'paused' : 'playing'); syncMotion(); });
reducedMotion.addEventListener('change', event => { const saved = storage.get('reist-motion'); paused = saved === 'paused' || (saved !== 'playing' && event.matches); syncMotion(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; last = 0; } else schedule(); });
new ResizeObserver(entries => { size = entries[0].contentRect.width; const dpi = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.round(size * dpi); canvas.height = Math.round(size * dpi); if (ctx) ctx.setTransform(dpi, 0, 0, dpi, 0, 0); draw(); schedule(); }).observe(canvas);
new IntersectionObserver(entries => { inView = entries[0].isIntersecting; if (!inView) { cancelAnimationFrame(frame); frame = 0; last = 0; } else schedule(); }).observe(canvas);
canvas.addEventListener('pointermove', event => { if (paused || event.pointerType !== 'mouse') return; const bounds = canvas.getBoundingClientRect(); pointer.targetX = (event.clientX - bounds.left) / bounds.width * 2 - 1; pointer.targetY = (event.clientY - bounds.top) / bounds.height * 2 - 1; });
canvas.addEventListener('pointerleave', () => { pointer.targetX = pointer.targetY = 0; });
let scrollFrame = 0;
function updateScroll() { scrollFrame = 0; const max = document.documentElement.scrollHeight - innerHeight; document.querySelector('.scroll-progress').style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`; }
addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }, { passive: true });
addEventListener('resize', updateScroll);
const revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('pointermove', event => { if (paused || event.pointerType !== 'mouse') return; const rect = el.getBoundingClientRect(); el.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .07}px, ${(event.clientY - rect.top - rect.height / 2) * .12}px)`; });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
});
document.querySelector('[data-capability="0"]').setAttribute('aria-disabled', 'true');
setLanguage(language); syncMotion(); updateScroll();
document.documentElement.classList.add('js');
