let btn = document.querySelector('.nav__toggle');
let navigation = document.querySelector('.nav');
let header_top = document.querySelector('.header__top');
let menu = document.querySelector('.menu');
btn.onclick = function () {
   header_top.classList.toggle('header__top--light');
   navigation.classList.toggle('nav--show');
   menu.classList.toggle('menu--show');
}

