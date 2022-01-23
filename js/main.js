$(document).ready(function () {

        



// funciones que redireccionan los botones del menu superior a la seccion que corresponden
let inicio = $('#inicio').offset().top,
skills = $('#skills').offset().top,
portfolio = $('#portfolio').offset().top,
contacto = $('#contacto').offset().top;

$('#btn-inicio').on('click', function (e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: inicio + 50
},
    500
);
});


$('#btn-skills').on('click', function (e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: skills + 50
},
    500
);
});

$('#btn-portfolio').on('click', function (e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: portfolio + 50
},
    500
);
});


$('#btn-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: contacto + 50
},
500
);
});

$('#boton-contacto').on('click', function (e) {
e.preventDefault();
$('html, body').animate({
    scrollTop: contacto + 50
},
    500
);
});
        // --------EFECTOS----------
        // efectos menu
        $('#menu').fadeIn(3000);
});