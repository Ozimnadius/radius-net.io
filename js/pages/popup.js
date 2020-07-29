//popup.js
$(function () {

    //VARIABLES

    //EVENTS
    $('body').on('change','.accept__input', function (e) {
        let $this = $(this),
            form = $this.closest('form'),
            btn = form.find('[type=submit]');
        btn.toggleClass('disabled');
    });

    popup.on('click', function (e) {
        let target = $(e.target);

        if (target.closest('.popup__wrapper').length == 0 ){
            closePopup();
        }
    });

    $('body',).on('click','.jsFormClose',function (e) {
        e.preventDefault();
        closePopup();
    });

    //FUNCTIONS


    //VENDORS

});

