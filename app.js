// const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {

    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;

    let elem2 = document.getElementById('price-href')
    let elem3 = document.getElementById('price-src')

    for (let key in langArr) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

        if (elem2) {
            elem2.href = langArr[key][hash];
        }
        if (elem3) {
            elem3.src = langArr[key][hash];
        }


    }
    console.log('href = ' + elem2.href)
    console.log('src = ' + elem3.src)
}

changeLanguage();