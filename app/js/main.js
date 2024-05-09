$(function () {
    $('.header__btn').on('click', function (){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function (){
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });
    var mixer = mixitup('.gallery__inner', {
        load:{
            filter: ".living"
        }
    });
})
// 'use strict'
// let burger = document.querySelector('.header__btn'),
//     rightside_menu = document.querySelector('.rightside-menu'),
//     menu_close = document.querySelector('.rightside-menu__close');

// burger.addEventListener('click', ()=>{
//     rightside_menu.classList.remove('rightside-menu--close')
// });
// menu_close.addEventListener('click', ()=>{
//     rightside_menu.classList.add('rightside-menu--close')
// });

