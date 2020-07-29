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