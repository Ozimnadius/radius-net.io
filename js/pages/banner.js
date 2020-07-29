//banner.js
$(function () {

    var bannerSwiper = new Swiper('.banner__slider', {
        // Optional parameters
        direction: 'horizontal',
        watchOverflow: true,
        // If we need pagination
        pagination: {
            el: '.banner__pag-wrapper',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.banner__next',
            prevEl: '.banner__prev',
        }
    });
});

$(window).on('load',function () {
    let banner = $('.banner'),
        header = $('.header'),
        headerTop = header.find('.header__top'),
        headerHeight = header.outerHeight(),
        headerTopHeight = headerTop.outerHeight()-5;

    if (header.hasClass('header_second')){
        banner.css('padding-top',headerHeight+'px')
    }else {
        banner.css('padding-top',headerTopHeight+'px')
    }
});