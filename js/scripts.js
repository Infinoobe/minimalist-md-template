document.body.innerHTML+= '<div class="overlay"></div>';
const defaultLang = 'en';
let currentLang = defaultLang;
if(!localStorage.preferedLang){
    localStorage.preferedLang = defaultLang;
}else{
    currentLang = localStorage.preferedLang == 'en' ? 'pl' : 'en';
    translate();
}
function $(el){
    return document.querySelector(el);
}
$('.navbar__actions__translate').addEventListener('click', translate);
[].forEach.call(document.querySelectorAll('.navbar__menu__link'), link => {
link.addEventListener('click', changeTheme);
});
function changeTheme(e){
        fadeIn($('.overlay'), () => {
        let theme = e.target.dataset.theme;
    $('.theme').setAttribute("href", `css/${theme}.css`);  
    fadeOut($('.overlay'));  
        });
}
function translate(){
     fadeIn($('.overlay'), () => {
    currentLang = currentLang == 'en' ? 'pl' : 'en';
    localStorage.preferedLang = currentLang;
    $('.navbar__brand__text').innerText = translation.brand[currentLang];
    $('.header').innerText = translation.header[currentLang];
    $('.descryption').innerHTML = translation.descryption[currentLang];
    fadeOut($('.overlay'));  
     });
}
const translation = {
    brand: {
        en: 'Template',
        pl: 'Szablon'
    },
    header: {
        en: 'Minimalist material design template',
        pl: 'Minimalistyczny szablon material design'
    },
    descryption: {
        en: 'This is template created with &hearts; by <a href="http://micorix.me">micorix</a>. You can find code <a href="https://github.com/micorix/minimalist-md-template">here (Github)</a>.',
        pl: 'Ten szablon został stworzony przez <a href="http://micorix.me">micorix</a>. Kod możesz znaleźć <a href="https://github.com/micorix/minimalist-md-template">tutaj (Github)</a>.'
    }
}
function fadeOut(element) {
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}
function fadeIn(element, callback) {
    let op = 0.1;  // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            callback();
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}