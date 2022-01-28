$(document).ready(function () {

    // animacion para el scroll direccionado a cada seccion de la web(con los enlaces del menu y el boton del contenedor header)
    $('a[href^="#"]').click(function() {
        let destino = $(this.hash);
        if (destino.length == 0) {
          destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
          destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 500);
        return false;
      });

        // --------EFECTOS----------
        // efectos menu
        $('#menu').fadeIn(3000);
});