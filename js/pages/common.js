// common.js
function getNumber(str) {
    return parseInt(str.replace(/\s/g, ''));
}

function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}

function imageResize(src) {
    $('img').not('.logo__img').attr('src', src);
}

// imageResize('https://loremflickr.com/320/440');

const wWidth = $(window).width();

function getSuccess() {
    let template = $(tmpl.content),
        loader = template.find('.success').clone();
    return loader;
}

$.validator.methods.tel = function (value, element) {
    return validateTel(value);
};

function validateTel(value) {
    let re = new RegExp(/\d/g),
        str = value.match(re);

    if (str.length == 11) {
        return true;
    } else {
        return false;
    }
}

$('input[type=tel]').mask('+7 (999) 999-99-99');

const popup = $('.popup'),
    popupWrap = popup.find('.popup__wrapper');

function getForm(cls) {
    let template = $(tmpl.content),
        form = template.find(cls).clone();
    return form;
}

function openForm(form) {
    popupWrap.html(form);
    popup.addClass('active');
    $('body').addClass('ovh');
}

function closePopup() {
    popup.removeClass('active');
    $('body').removeClass('ovh');
}


if (wWidth < 700) {
    $('table').each(function (x, i) {
        let $table = $(i),
            $th = $table.find('thead').find('th'),
            $tr = $table.find('tbody').find('tr');

        $table.html(getTable($tr, $th));
    });
}

function getTable($tr, $th) {
    let tbody = $('<tbody>');

    $tr.each(function (x, i) {
        let cls = '';
        if ((x+1)%2 == 1){
            cls = 'grey';
        }
        tbody.append(getTrs($(i), $th,cls));
    });


    return tbody;
}

function getTrs(tr, $th,cls) {
    let trArr = [],
        tds = tr.find('td'),
        leng = tds.length;

    tds.each(function (x, i) {

        let newTr = $('<tr>').addClass(cls),
            td = $(i);

        if (x == 0){
            newTr.addClass('first');
        }
        newTr.append($('<td>').html($($th[x]).html()));
        newTr.append(td);
        trArr.push(newTr);
    });

    return trArr;
}