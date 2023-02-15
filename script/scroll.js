function handleScrollEvent() {
    const currentUrl = window.location.href;

    if (currentUrl.includes('#')) {
        const url = new URL(currentUrl);
        url.hash = '';
        history.replaceState({}, document.title, url.toString());
    }
}

document.addEventListener('scroll', handleScrollEvent, {passive: true, capture: false, once: false});