document.body.innerHTML+= '<div class="overlay"></div>';
const defaultLang = 'en';
let currentLang = defaultLang;
function $(el){
    return document.querySelector(el);
}
$('.navbar__actions__translate').addEventListener('click', e => {
     fadeIn($('.overlay'), () => {
           currentLang = currentLang == 'en' ? 'pl' : 'en';
    $('.navbar__brand__text').innerText = translation.brand[currentLang];
    
[].forEach.call(document.querySelectorAll('.navbar__menu li'), (li, i) => {
  li.innerText = `${translation.menuItem[currentLang]} ${++i}`;
});
    
    $('.header').innerText = translation.header[currentLang];
    $('.descryption').innerHTML = translation.descryption[currentLang];
    fadeOut($('.overlay'));  
     });
})
const translation = {
    brand: {
        en: 'Template',
        pl: 'Szablon'
    },
    menuItem: {
        en: 'Item',
        pl: 'Link'
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