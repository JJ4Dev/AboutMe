class Translator {
    constructor(attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }

    process() {
        const xhrFile = new XMLHttpRequest();
        xhrFile.open('GET', `lng/${this.lng}.json`, true);
        xhrFile.onreadystatechange = () => {
            if (xhrFile.readyState === 4) {
                if (xhrFile.status === 200 || xhrFile.status === 0) {
                    const lngObject = JSON.parse(xhrFile.responseText);
                    const allElements = document.getElementsByTagName('*');
                    for (const element of allElements) {
                        const key = element.getAttribute(this.attribute);
                        if (key !== null) {
                            element.innerHTML = lngObject[key];
                        }
                    }
                }
            }
        };
        xhrFile.send();
    }
}

function handleLanguageSwitch(event) {
    const lng = event.target.checked ? 'de' : 'en';
    translate(lng, 'lng-tag');
}

function translate(lng, tagAttr) {
    const translator = new Translator(tagAttr, lng);
    translator.process();
}

document.getElementById('languageSwitch').addEventListener('change', handleLanguageSwitch);

translate('en', 'lng-tag');