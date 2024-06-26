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
    
    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 10,
        slidesToScroll: 10
    });
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--left"><img src="images/icons/arrow-slide-left.svg" alt="img"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--right"><img src="images/icons/arrow-slide-right.svg" alt="img"></button>',
        arrows: true,
        autoplay: true,
        fade: true,
    });
    
    var mixer = mixitup('.gallery__inner', {
        load:{
            filter: ".living"
        }
    });
})
console.log(window.location.href);
// this consruction for the active class to headers elements

const link_list = document.querySelectorAll('.menu__list-link');
console.log(link_list);
for (let i = 0; i < link_list.length; i++) {
    if (link_list[i].innerHTML.includes('About') && (window.location.href).includes('about')) {
        console.log('yes');
        link_list[i].classList.add('menu__list-link--active');
        break
    }
    else if(link_list[i].innerHTML.includes('Gallery') && (window.location.href).includes('gallery')){
        link_list[i].classList.add('menu__list-link--active');
        break
    }
    else if(link_list[i].innerHTML.includes('Blog') && (window.location.href).includes('blog')){
        link_list[i].classList.add('menu__list-link--active');
        break
    }
    else if(link_list[i].innerHTML.includes('Contact') && (window.location.href).includes('contact')){
        link_list[i].classList.add('menu__list-link--active');
        break
    }
    else{
        link_list[i].classList.remove('menu__list-link--active');
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

