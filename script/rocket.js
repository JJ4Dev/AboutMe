const rocket = document.getElementById("rocketUp");
rocket.addEventListener("click", function () {
    rocket.classList.add("rocketAnimation");
    setTimeout(function () {
        document.getElementById("home").scrollIntoView({behavior: 'smooth'});
        rocket.classList.remove("rocketAnimation")
    }, 550);
});