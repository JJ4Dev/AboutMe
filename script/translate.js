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