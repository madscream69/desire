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
console.log(window.location.href);
// this consruction for the active class to headers elements
if ((window.location.href).includes('about')) {
    const about = document.querySelectorAll('.menu__list-link');
    console.log(about);
    for (let i = 0; i < about.length; i++) {
        if (about[i].innerHTML.includes('About')) {
            console.log('yes');
            about[i].classList.add('menu__list-link--active');
            break
        }
        else if(about[i].innerHTML.includes('Gallery')){
            about[i].classList.add('menu__list-link--active');
            break
        }
        else if(about[i].innerHTML.includes('Blog')){
            about[i].classList.add('menu__list-link--active');
            break
        }
        else if(about[i].innerHTML.includes('Contact')){
            about[i].classList.add('menu__list-link--active');
            break
        }
        else{
            about[i].classList.remove('menu__list-link--active');
        }
    }
}
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

