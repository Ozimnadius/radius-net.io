//mmenu.js
$(function () {

    // VARIABLES

    // EVENTS
    // Переходм между вкладками
    $('.mmenu__link_arr').on('click', function (e) {
        e.preventDefault();
        let link = $(this),
            wrapper = link.next();

        wrapper.addClass('active');
    });

    //Закрытие вкладки
    $('.jsWrapClose').on('click', function (e) {
        e.preventDefault();
        let btn = $(this),
            wrapper = btn.closest('.mmenu__wrapper');

        wrapper.removeClass('active');
    });

    // Открытие меню
    $('.jsMenuOpen').on('click',function (e) {
        e.preventDefault();
        e.stopPropagation();
        openMenu();
    });

    //Закрытие меню
    $('body').on('click', function (e) {
        let target = $(e.target);

        if (target.closest('.mmenu').length == 0) {
            closeMenu();
        }
    });

    $('.jsMenuClose').on('click', function (e) {
        e.preventDefault();
        closeMenu();
    });


    // FUNCTIONS
    // Функция отрытия меню
    function openMenu() {
        let menu = $('.mmenu');
        menu.addClass('active');
        // setOverflow();
    }

    // Функция закрытия меню
    function closeMenu() {
        let menu = $('.mmenu'),
            wrappers = menu.find('.mmenu__wrapper');
        menu.removeClass('active');
        wrappers.removeClass('active');
        // removeOverflow();
    }


    //VENDORS



});