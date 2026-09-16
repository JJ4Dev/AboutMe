import { planRequest } from './request-demo.js';
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
    description: 'Jan Reist — Software Engineer in der Region Basel. C#/.NET, Full-Stack-Anwendungen, Integrationen und durchdachte Weboberflächen.',
    architectureTitle: 'EIN BLICK IN DIE ANWENDUNG.', architectureHint: 'Die Ebenen entdecken',
    layerInterface: 'OBERFLÄCHE', layerServices: 'DIENSTE', layerData: 'DATEN & CLOUD',
    layer0Caption: 'Oberflächen für Menschen.', layer1Caption: 'Logik, die Systeme verbindet.', layer2Caption: 'Daten, die Anwendungen antreiben.',
    enable3d: '3D aktivieren', disable3d: 'Einfache Ansicht', loading3d: '3D wird geladen…',
    failed3d: 'Die 3D-Ansicht ist hier nicht verfügbar. Du kannst alle Ebenen weiterhin erkunden.',
    separateLayers:'Ebenen trennen', combineLayers:'Ebenen zusammenführen', sendRequest:'Anfrage senden',
    layer0Detail:'Mit einer klaren Aktion beginnen. Fortschritt anzeigen, Ergebnisse liefern und Fehler verständlich machen.',
    layer1Detail:'Eingaben prüfen, Abläufe koordinieren und klar definierte Antworten liefern.',
    layer2Detail:'Nur die benötigten Daten lesen. Wenn eine Abhängigkeit ausfällt, muss die Anwendung damit umgehen können.',
    heroDemoReady:'Eine Browser-Simulation. Folge der Anfrage durch die Ebenen.', openLab:'Eingaben testen & Code ansehen',
    demoKicker:'INTERAKTIVE DEMO', demoKind:'ÖFFENTLICH NACHVOLLZIEHBAR', labLine1:'Eine Anfrage.', labLine2:'Jede Entscheidung.',
    labIntro:'Teste den Erfolgsfall. Und dann die Fehlerfälle.', localSimulation:'Browser-Simulation · keine Serveraufrufe',
    requestLabel:'ANFRAGE', queryLabel:'Meine Kompetenzen durchsuchen', queryHint:'Teste .NET, Blazor oder Azure. Leere das Feld, um die Validierung zu prüfen.',
    offlineOption:'Die Datenquelle nicht verfügbar machen', responseLabel:'ANTWORT', responseReady:'Das Ergebnis erscheint hier.',
    simulationNote:'Diese JavaScript-Demo bildet einen Ablauf von Oberfläche über Dienste bis zu Daten mit meinen öffentlichen Kompetenzen ab. Die Ebenen oben stehen für meinen .NET-Stack.',
    inspectSource:'Die ausgeführte Logik ansehen', viewSource:'Quellcode auf GitHub ansehen', sourceLoading:'Quellcode wird geladen…', sourceFailed:'Der Quellcode konnte nicht geladen werden. Nutze den GitHub-Link.',
    decisionProblem:'DAS PROBLEM', decisionApproach:'DER ANSATZ', decisionTradeoff:'DIE ABWÄGUNG',
    decision1Title:'Das Unsichtbare sichtbar machen.', decision1Body:'Ein Ergebnis allein zeigt die Arbeit dahinter nicht. Die Ablaufspur zeigt, wo Eingaben geprüft, Daten gelesen und Antworten erstellt werden.',
    decision2Title:'Logik getrennt halten.', decision2Body:'Dieselbe Anfragefunktion steuert beide Demos. Darstellung und Animation zeigen ihr Ergebnis; sie entscheiden nicht über den Erfolg der Anfrage.',
    decision3Title:'Ressourcen bewusst einsetzen.', decision3Body:'Die Demo läuft lokal, 3D wird nur auf Wunsch geladen. So bleibt sie ohne Backend oder leistungsstarken Grafikchip nutzbar.',
    traceLabel:'Ablauf der Anfrage', traceReady:'Warte auf deine erste Anfrage.', traceInput:'Oberfläche → Eingabe erfassen', traceValidate:'Dienst → Eingabe validieren',
    traceQuery:'Daten → Kompetenzen durchsuchen', traceSerialize:'Dienst → Antwort erstellen', traceSuccess:'Oberfläche → Ergebnis anzeigen',
    traceInvalid:'Oberfläche → Validierungsfehler anzeigen', traceUnavailable:'Dienst → Ausfall abfangen', traceError:'Oberfläche → Fehler verständlich anzeigen',
    requestRunning:'Anfrage wird verarbeitet…', responseSuccess:'Anfrage abgeschlossen. Das Ergebnis steht unten.', responseInvalid:'Die Validierung hat die Anfrage abgewiesen.', responseUnavailable:'Der Ausfall wurde abgefangen. Schalte die Datenquelle wieder ein und versuche es erneut.'
  }, en: {}
};
document.querySelectorAll('[data-i18n]').forEach(el => { translations.en[el.dataset.i18n] = el.textContent; });
translations.en.resume = 'Resume motion';
translations.en.homeLabel = 'Jan Reist home';
translations.en.navLabel = 'Main navigation';
translations.en.languageLabel = 'Language';
translations.en.description = document.querySelector('meta[name="description"]').content;
translations.en.layer1Caption = 'Logic that connects systems.';
translations.en.layer2Caption = 'Data that powers applications.';
translations.en.disable3d = 'Simple view';
translations.en.loading3d = 'Loading 3D…';
translations.en.failed3d = '3D is unavailable here. You can still explore every layer.';
Object.assign(translations.en, {
  traceLabel:'Request trace',
  combineLayers:'Bring layers together', layer1Detail:'Validate input, coordinate the work, and return a clear response.',
  layer2Detail:'Read only the data you need. If a dependency fails, the application needs a useful way to recover.',
  traceInput:'Interface → capture input', traceValidate:'Service → validate input', traceQuery:'Data → search skills',
  traceSerialize:'Service → shape response', traceSuccess:'Interface → show result', traceInvalid:'Interface → show validation error',
  traceUnavailable:'Service → handle unavailable data', traceError:'Interface → explain the failure',
  requestRunning:'Processing request…', responseSuccess:'Request complete. The result is below.', responseInvalid:'Validation rejected the request.',
  responseUnavailable:'The failure was handled. Bring the data source online and try again.',
  sourceLoading:'Loading source…', sourceFailed:'Source could not be loaded. Use the GitHub link.'
});
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
  connections?.refresh();
  updateRequestPaths();
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
const architecture = document.querySelector('.architecture');
const architectureStage = document.querySelector('.architecture-stage');
const layerButtons = [...document.querySelectorAll('[data-layer]')];
const threeToggle = document.querySelector('.three-toggle');
const threeStatus = document.querySelector('#three-status');
let connections = null;
let requestJob = null, manualSpread = false;
const layerToggle = document.querySelector('.layer-toggle');
function setSpread(value) {
  architectureStage.style.setProperty('--spread', value);
  const expanded = value > .5;
  layerToggle.setAttribute('aria-pressed', String(expanded));
  setText(layerToggle.querySelector('[data-i18n]'), expanded ? 'combineLayers' : 'separateLayers');
  connections?.refresh();
  updateRequestPaths();
}
function setText(element, key) { element.dataset.i18n = key; element.textContent = translate(key); }
layerToggle.addEventListener('click', () => {
  manualSpread = true;
  setSpread(layerToggle.getAttribute('aria-pressed') === 'true' ? 0 : 1);
  connections?.pulse();
});
function showSimpleView(failed = false) {
  connections?.dispose(); connections = null;
  architecture.classList.remove('three-active');
  threeToggle.setAttribute('aria-pressed', 'false');
  const label = threeToggle.querySelector('[data-i18n]');
  label.dataset.i18n = 'enable3d'; label.textContent = translate('enable3d');
  threeStatus.textContent = failed ? translate('failed3d') : '';
  if (failed) threeStatus.dataset.i18n = 'failed3d'; else delete threeStatus.dataset.i18n;
  syncRequestMotion();
}
threeToggle.addEventListener('click', async () => {
  if (connections) { showSimpleView(); return; }
  threeToggle.disabled = true;
  const label = threeToggle.querySelector('[data-i18n]');
  label.dataset.i18n = 'loading3d'; label.textContent = translate('loading3d');
  threeStatus.textContent = ''; delete threeStatus.dataset.i18n;
  delete threeStatus.dataset.error;
  try {
    const {createConnections} = await import('./architecture-3d.bundle.js');
    const view = await createConnections(architectureStage, layerButtons, error => { threeStatus.dataset.error = error.message; showSimpleView(true); });
    connections = view;
    architecture.classList.add('three-active');
    threeToggle.setAttribute('aria-pressed', 'true');
    label.dataset.i18n = 'disable3d'; label.textContent = translate('disable3d');
    syncRequestMotion();
    connections.pulse(Number(architectureStage.dataset.step));
  } catch (error) { threeStatus.dataset.error = error.message; console.warn('Optional 3D unavailable:', error.message); showSimpleView(true); }
  finally { threeToggle.disabled = false; }
});
function selectLayer(index, animate = true) {
  architectureStage.dataset.step = String(index);
  layerButtons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.layer) === index)));
  const caption = document.querySelector('#architecture-caption [data-i18n]');
  caption.dataset.i18n = `layer${index}Caption`;
  caption.textContent = translate(caption.dataset.i18n);
  setText(document.querySelector('.layer-explanation'), `layer${index}Detail`);
  document.querySelector('.caption-index').textContent = `0${index + 1} — 03`;
  if (animate) connections?.pulse(index);
}
layerButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectLayer(index));
  button.addEventListener('keydown', event => {
    const next = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? (index + 1) % 3 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? (index + 2) % 3 : null;
    if (next !== null) { event.preventDefault(); layerButtons[next].focus(); selectLayer(next); }
  });
});
architectureStage.addEventListener('pointermove', event => {
  if (paused || event.pointerType !== 'mouse') return;
  const bounds = architectureStage.getBoundingClientRect();
  architectureStage.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 4}deg`);
  architectureStage.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height - .5) * -4}deg`);
});
architectureStage.addEventListener('pointerleave', () => {
  architectureStage.style.setProperty('--pointer-x', '0deg');
  architectureStage.style.setProperty('--pointer-y', '0deg');
});
let architectureVisible = true;
function syncRequestMotion() {
  const stopped = paused || !architectureVisible || document.hidden;
  architecture.classList.toggle('flow-paused', stopped);
  const paths = document.querySelector('.request-paths');
  if (stopped || connections || !requestJob || requestJob.origin !== 'hero') paths.pauseAnimations(); else paths.unpauseAnimations();
  connections?.setState({visible:architectureVisible, paused});
  if (requestJob && (paused || document.hidden || (requestJob.origin === 'hero' && !architectureVisible))) finishRequest();
}
new IntersectionObserver(entries => { architectureVisible = entries[0].isIntersecting; syncRequestMotion(); }).observe(architecture);
document.addEventListener('visibilitychange', syncRequestMotion);
function syncMotion() {
  document.documentElement.classList.toggle('motion-paused', paused);
  document.documentElement.classList.toggle('motion-enabled', !paused);
  syncAmbientMotion();
  syncRequestMotion();
  updateMotionLabel();
}
motionButton.addEventListener('click', () => { paused = !paused; storage.set('reist-motion', paused ? 'paused' : 'playing'); syncMotion(); });
reducedMotion.addEventListener('change', event => { const saved = storage.get('reist-motion'); paused = saved === 'paused' || (saved !== 'playing' && event.matches); syncMotion(); });
let scrollFrame = 0;
function updateScroll() {
  scrollFrame = 0; const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('.scroll-progress').style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  if (!paused && !manualSpread && architectureVisible) {
    const top = architectureStage.getBoundingClientRect().top;
    setSpread(Math.max(0, Math.min(1, (innerHeight * .55 - top) / (innerHeight * .4))));
  }
  updateRequestPaths();
}
addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }, { passive: true });
addEventListener('resize', updateScroll);
const revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('pointermove', event => { if (paused || event.pointerType !== 'mouse') return; const rect = el.getBoundingClientRect(); el.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .07}px, ${(event.clientY - rect.top - rect.height / 2) * .12}px)`; });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
});

const requestButtons = [document.querySelector('#hero-request'), document.querySelector('#lab-send')];
const heroStatus = document.querySelector('.hero-request-status');
const responseSummary = document.querySelector('#response-summary');
const traceList = document.querySelector('#request-trace');
function requestPath(from, to) {
  const a = layerButtons[from], b = layerButtons[to], route = Math.min(from, to);
  const x1 = a.offsetLeft + a.offsetWidth * (from === 1 ? .02 : .94);
  const y1 = a.offsetTop + a.offsetHeight * .72;
  const x2 = b.offsetLeft + b.offsetWidth * (to === 1 ? .02 : .94);
  const y2 = b.offsetTop + b.offsetHeight * .72;
  const rail = architectureStage.clientWidth * (route === 0 ? .93 : .16);
  return `M${x1} ${y1} C${rail} ${y1},${rail} ${y2},${x2} ${y2}`;
}
function updateRequestPaths() {
  const svg = document.querySelector('.request-paths');
  svg.setAttribute('viewBox', `0 0 ${architectureStage.clientWidth} ${architectureStage.clientHeight}`);
  svg.querySelectorAll('.request-track').forEach((path, index) => path.setAttribute('d', requestPath(index, index + 1)));
}
new ResizeObserver(updateRequestPaths).observe(architectureStage);
function showTrace(plan, index) {
  traceList.replaceChildren(...plan.trace.slice(0, index + 1).map((step, i) => {
    const item = document.createElement('li'); setText(item, step.key);
    item.className = i === index ? 'trace-current' : 'trace-complete'; return item;
  }));
}
function finishRequest() {
  if (!requestJob) return;
  const { plan, timer } = requestJob; clearTimeout(timer); requestJob = null;
  architecture.classList.remove('request-running');
  layerButtons.forEach(button => button.classList.remove('request-current'));
  showTrace(plan, plan.trace.length - 1);
  document.querySelector('#response-body').textContent = JSON.stringify(plan.body, null, 2);
  const code = document.querySelector('#response-code'); code.textContent = `${plan.status} ${plan.label}`; code.dataset.status = plan.status;
  const key = plan.status === 200 ? 'responseSuccess' : plan.status === 400 ? 'responseInvalid' : 'responseUnavailable';
  setText(responseSummary, key); setText(heroStatus, key);
  requestButtons.forEach(button => { button.disabled = false; });
  document.querySelector('#request-form').setAttribute('aria-busy', 'false');
  syncRequestMotion();
}
function stepRequest() {
  if (!requestJob) return;
  const { plan, index, origin } = requestJob;
  if (index >= plan.trace.length) { finishRequest(); return; }
  const step = plan.trace[index]; showTrace(plan, index);
  if (origin === 'hero') {
    selectLayer(step.layer, false);
    layerButtons.forEach(button => button.classList.toggle('request-current', Number(button.dataset.layer) === step.layer));
    setText(heroStatus, step.key);
    if (index > 0) {
      const from = plan.trace[index - 1].layer;
      connections?.pulse(step.layer, { from, duration:620 });
      const animation = document.querySelector('.request-packet animateMotion');
      animation.setAttribute('path', requestPath(from, step.layer));
      animation.beginElement();
    }
  }
  requestJob.index++;
  requestJob.timer = setTimeout(stepRequest, 620);
}
function runRequest(query, offline, origin) {
  if (requestJob) return;
  const plan = planRequest(query, { offline });
  requestJob = { plan, index: 0, timer: 0, origin };
  requestButtons.forEach(button => { button.disabled = true; });
  document.querySelector('#request-form').setAttribute('aria-busy', 'true');
  document.querySelector('#response-code').textContent = '…';
  document.querySelector('#response-body').textContent = '{ }';
  setText(responseSummary, 'requestRunning');
  if (origin === 'hero') {
    manualSpread = true; setSpread(1);
    architecture.classList.add('request-running');
    document.querySelector('.request-paths').setCurrentTime(0);
  }
  if (paused || document.hidden) { finishRequest(); return; }
  syncRequestMotion(); stepRequest();
}
document.querySelector('#hero-request').addEventListener('click', () => {
  document.querySelector('#skill-query').value = '.NET'; document.querySelector('#demo-offline').checked = false;
  runRequest('.NET', false, 'hero');
});
document.querySelector('#request-form').addEventListener('submit', event => {
  event.preventDefault(); runRequest(document.querySelector('#skill-query').value, document.querySelector('#demo-offline').checked, 'lab');
});
new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting && requestJob?.origin === 'lab') finishRequest();
}).observe(document.querySelector('#request-lab'));
document.querySelector('.source-inspector').addEventListener('toggle', async event => {
  const code = document.querySelector('#demo-source');
  if (!event.target.open || code.dataset.loaded) return;
  setText(code, 'sourceLoading');
  try {
    const response = await fetch('script/request-demo.js');
    if (!response.ok) throw new Error('Source unavailable');
    code.textContent = await response.text(); delete code.dataset.i18n; code.dataset.loaded = 'true';
  } catch { setText(code, 'sourceFailed'); }
});

function syncAmbientMotion() {
  document.documentElement.classList.toggle('document-hidden', document.hidden);
  document.querySelectorAll('.system-lines').forEach(svg => {
    if (paused || document.hidden || svg.closest('.motion-dormant')) svg.pauseAnimations(); else svg.unpauseAnimations();
  });
}
const ambientObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.target.classList.toggle('motion-dormant', !entry.isIntersecting));
  syncAmbientMotion();
});
document.querySelectorAll('.hero-copy,.stack-ribbon,.system-visual').forEach(element => ambientObserver.observe(element));
document.addEventListener('visibilitychange', syncAmbientMotion);
document.querySelector('[data-capability="0"]').setAttribute('aria-disabled', 'true');
setLanguage(language); syncMotion(); updateScroll();
document.documentElement.classList.add('js');
