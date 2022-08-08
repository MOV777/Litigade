let btn = document.querySelector('.nav__toggle');
let navigation = document.querySelector('.nav');
let header_top = document.querySelector('.header__top');
let menu = document.querySelector('.menu');
let header_bottom = document.querySelector('.header__bottom');
btn.onclick = function () {
   navigation.classList.toggle('nav--show');
   menu.classList.toggle('menu--show');
}

