'use strict'
let burger = document.querySelector('.header__btn'),
    rightside_menu = document.querySelector('.rightside-menu'),
    menu_close = document.querySelector('.rightside-menu__close');
console.log(menu_close);
burger.addEventListener('click', ()=>{
    rightside_menu.classList.remove('rightside-menu--close')
});
menu_close.addEventListener('click', ()=>{
    rightside_menu.classList.add('rightside-menu--close')
});
// $(function () {
//     $('.header-btn').on('click', () =>{
//         $('rightside-menu').removeClass('rightside-menu--close')
//     });
//     $('rightside-menu__close').on('click', () =>{
//         $('rightside-menu').addClass('rightside-menu--close')
//     });
// })