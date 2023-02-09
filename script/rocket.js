const rocket = document.getElementById("rocketUp");

const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({behavior: 'smooth'});
};

const addRocketAnimation = () => {
    rocket.classList.add("rocketAnimation");
};

const removeRocketAnimation = () => {
    rocket.classList.remove("rocketAnimation");
};

rocket.addEventListener("click", () => {
    addRocketAnimation();
    setTimeout(scrollToHome, 750);
    setTimeout(removeRocketAnimation, 1000);
});
