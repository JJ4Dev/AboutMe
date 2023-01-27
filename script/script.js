let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};


const rocket = document.getElementById("rocketUp");
rocket.addEventListener("click", function () {
    rocket.classList.add("rocketAnimation");
    setTimeout(function () {
        document.getElementById("home").scrollIntoView({behavior: 'smooth'});
        rocket.classList.remove("rocketAnimation")
    }, 800);
});


function Translate() {

    this.init = function (attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }

    this.process = function () {
        let _self = this;
        let xrhFile = new XMLHttpRequest();

        xrhFile.open("GET", "lng/" + this.lng + ".json", true);
        xrhFile.onreadystatechange = function () {
            if (xrhFile.readyState === 4) {
                if (xrhFile.status === 200 || xrhFile.status === 0) {
                    let LngObject = JSON.parse(xrhFile.responseText);
                    let allDom = document.getElementsByTagName("*");
                    for (let i = 0; i < allDom.length; i++) {
                        let elem = allDom[i];
                        let key = elem.getAttribute(_self.attribute);
                        if (key != null) {
                            elem.innerHTML = LngObject[key];
                        }
                    }

                }
            }
        }
        xrhFile.send();
    }
}

function translate(lng, tagAttr) {
    let translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
}

document.getElementById('languageSwitch').addEventListener('change', function () {
    if (this.checked) {
        translate('de', 'lng-tag');
    } else {
        translate('en', 'lng-tag');
    }
});

translate('en','lng-tag');