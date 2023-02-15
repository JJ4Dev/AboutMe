const rocket = document.getElementById('rocketUp');

function scrollToHome() {
    document.getElementById('home').scrollIntoView({behavior: 'smooth'});
}

function addRocketAnimation() {
    rocket.classList.add('rocketAnimation');
}

function removeRocketAnimation() {
    rocket.classList.remove('rocketAnimation');
}

function handleClick() {
    addRocketAnimation();
    setTimeout(scrollToHome, 750);
    setTimeout(removeRocketAnimation, 1000);
}

rocket.addEventListener('click', handleClick);