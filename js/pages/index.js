//index.js
$(function () {

    //VARIABLES
    let sliders = $('.islider__slider'),
        slidersArr = [];


    //EVENTS

    //FUNCTIONS
    $('.itariff__circle').each(function (x, i) {

        let item = $(i),
            circle = item.find('.itariff__circle-2'),
            r = parseInt(circle.parent().outerHeight() * 0.47),
            p = 2 * Math.PI * r,
            percent = item.data('percent'),
            res = percent * p / 100;
        circle.css('stroke-dasharray', res + 'px ' + p + 'px')

    });

    //VENDORS
    sliders.each(function (x,i) {
        let slider = $(i),
            id = slider.data('id');

        slidersArr.push(new Swiper('.islider__slider[data-id="'+id+'"]', {
            // Optional parameters
            direction: 'horizontal',
            watchOverflow: true,
            slidesPerView: 2,
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: '.islider__next[data-id="'+id+'"]',
                prevEl: '.islider__prev[data-id="'+id+'"]',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        }));

    });

});