document.addEventListener("scroll", function () {
    let currentUrl = window.location.href;
    if (currentUrl.includes("#")) {
        history.pushState({}, "", currentUrl.split("#")[0]);
    }
});