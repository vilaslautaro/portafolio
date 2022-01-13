$(document).ready(function(){

var inicio = $('#inicio').offset().top,
        servicios = $('#servicios').offset().top,
        portfolio = $('#portfolio').offset().top,
        contacto = $('#contacto').offset().top;
    
        $('#btn-inicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: inicio + 50
            },
                500
            );
        });
    
    
        $('#btn-servicios').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: servicios + 50
            },
                500
            );
        });
        
        $('#btn-portfolio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: portfolio + 80
            },
            500
            );
        });
        
        
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto + 50
            },
                500
            );
        });
        
        $('#boton-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto + 50
            },
                500
            );
        });
});