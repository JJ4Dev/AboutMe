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
    architectureTitle: 'SOFTWARE, DIE VERBINDET.', architectureHint: 'Die Ebenen entdecken',
    layerInterface: 'OBERFLÄCHE', layerServices: 'DIENSTE', layerData: 'DATEN & CLOUD',
    layer0Caption: 'Oberflächen für Menschen.', layer1Caption: 'Logik, die Systeme verbindet.', layer2Caption: 'Daten, die Anwendungen antreiben.'
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
const architecture = document.querySelector('.architecture');
const architectureStage = document.querySelector('.architecture-stage');
const layerButtons = [...document.querySelectorAll('[data-layer]')];
function selectLayer(index) {
  architectureStage.dataset.step = String(index);
  layerButtons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.layer) === index)));
  const caption = document.querySelector('#architecture-caption [data-i18n]');
  caption.dataset.i18n = `layer${index}Caption`;
  caption.textContent = translate(caption.dataset.i18n);
  document.querySelector('.caption-index').textContent = `0${index + 1} — 03`;
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
  if (stopped) paths.pauseAnimations(); else paths.unpauseAnimations();
}
new IntersectionObserver(entries => { architectureVisible = entries[0].isIntersecting; syncRequestMotion(); }).observe(architecture);
document.addEventListener('visibilitychange', syncRequestMotion);
function syncMotion() {
  document.documentElement.classList.toggle('motion-paused', paused);
  document.documentElement.classList.toggle('motion-enabled', !paused);
  document.querySelectorAll('.system-lines').forEach(svg => { if (paused) svg.pauseAnimations(); else svg.unpauseAnimations(); });
  syncRequestMotion();
  updateMotionLabel();
}
motionButton.addEventListener('click', () => { paused = !paused; storage.set('reist-motion', paused ? 'paused' : 'playing'); syncMotion(); });
reducedMotion.addEventListener('change', event => { const saved = storage.get('reist-motion'); paused = saved === 'paused' || (saved !== 'playing' && event.matches); syncMotion(); });
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
