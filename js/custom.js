$(function () {
    $('.ifeed__form').validate({
        rules: {
            ifeedName: "required",
            ifeedTel: "required",
            ifeedEmail: {
                required: true,
                email: true
            },
            ifeedAddr: "required"
        },
        invalidHandler: function(event, validator) {
            $(this).find('.form__error').addClass('active');
        },
        submitHandler: function (form) {
            let data = $(form).serialize(),
                url = $(form).attr('action');

            $(form).find('.form__error').removeClass('active');

            $.ajax({
                dataType: "json",
                type: "POST",
                url: url,
                data: data,
                success: function (result) {
                    if (result.status) {
                        $(form).append(getSuccess());
                    } else {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                },
                error: function (result) {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            });
        },
    });

    $('.contacts__form').validate({
        rules: {
            cName: "required",
            cTel: "required",
            cEmail: {
                required: true,
                email: true
            },
            cAddr: "required"
        },
        invalidHandler: function(event, validator) {
            $(this).find('.form__error').addClass('active');
        },
        submitHandler: function (form) {
            let data = $(form).serialize(),
                url = $(form).attr('action');

            $(form).find('.form__error').removeClass('active');

            $.ajax({
                dataType: "json",
                type: "POST",
                url: url,
                data: data,
                success: function (result) {
                    if (result.status) {
                        $(form).append(getSuccess());
                    } else {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                },
                error: function (result) {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            });
        },
    });

    $('body').on('click','.jsCall', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        let form = getForm('.callback');
        openForm(form);

        form.validate({
            rules: {
                name: "required",
                tel: "required",
                email: {
                    required: true,
                    email: true
                },
                addr: "required"
            },
            invalidHandler: function(event, validator) {
                $(this).find('.form__error').addClass('active');
            },
            submitHandler: function (form) {
                let data = $(form).serialize(),
                    url = $(form).attr('action');

                $(form).find('.form__error').removeClass('active');

                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: url,
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            $(form).append(getSuccess());
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            },
        });
        $('input[type=tel]').mask('+7 (999) 999-99-99');

    });

    $('body').on('click','.jsRequest', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let form = getForm('.request');

        openForm(form);



        form.validate({
            rules: {
                name: "required",
                tel: "required",
                email: {
                    required: true,
                    email: true
                },
                addr: "required"
            },
            invalidHandler: function(event, validator) {
                $(this).find('.form__error').addClass('active');
            },
            submitHandler: function (form) {
                let data = $(form).serialize(),
                    url = $(form).attr('action');

                $(form).find('.form__error').removeClass('active');

                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: url,
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            $(form).append(getSuccess());
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            },
        });
        $('input[type=tel]').mask('+7 (999) 999-99-99');

    });

    $('body').on('click','.jsOpenPacks', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let $this= $(this),
            id = $this.data('id'),
            data = {
                action: 'packs',
                id: id
            },
            url = '/ajax.php';

        $.ajax({
            dataType: "json",
            type: "POST",
            url: url,
            data: data,
            success: function (result) {
                if (result.status) {
                    openForm(result.html);
                } else {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            },
            error: function (result) {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        });

    });

});

/*YANDEX*/
$(function () {
    ymaps.ready(init);
    var myMap,
        myPlacemark,
        myPin;

    function init() {

        if ($('#map').length) {
            var center = [51.810079271382726,107.64693324736017];
            // if ($(window).width() < 576) {
            //     center = [55.609501798660396, 37.61325538360591];
            // }

            myMap = new ymaps.Map("map", {
                center: center,
                zoom: 17,
                controls: []
            });


            myMap.behaviors.disable(['scrollZoom', 'drag']);
            // myMap.controls.remove('geolocationControl')
            //     .remove('searchControl')
            //     .remove('trafficControl')
            //     .remove('typeSelector')
            //     .remove('fullscreenControl')
            //     .remove('zoomControl')
            //     .remove('rulerControl');
            // myMap.controls.add('zoomControl');

            myPin = new ymaps.GeoObjectCollection({}, {
                // iconLayout: 'default#image',
                // iconImageHref: '/img/icons/map-marker.svg',
                // iconImageSize: [46, 57],
                // iconImageOffset: [-15, -55]
            });


            myPlacemark = new ymaps.Placemark([51.810079271382726,107.64693324736017], {
                    balloonContentHeader: "Радиус-NET",
                    balloonContentBody: "Компания «Радиус-NET» - мы подключаем лучший интернет для дома и офиса в г.Улан-Удэ",
                    balloonContentFooter: "г. Улан-Удэ, пр.Строителей, д.40Б",
                    hintContent: "Радиус-NET"
                },
                {
                    // Задаем стиль метки (метка в виде круга).
                    preset: "islands#circleDotIcon",
                    // Задаем цвет метки (в формате RGB).
                    iconColor: '#ff0000'
                });


            myPin.add(myPlacemark);
            myMap.geoObjects.add(myPin);
        }
    }
});
/*END YANDEX*/