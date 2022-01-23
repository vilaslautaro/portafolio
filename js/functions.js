// esta funcion es la que crea dinamicamente cada trabajo en el DOM
// (usamos JS Vanilla para realizar esta funcion)
function creadorUITrabajos(trabajos){
    contenedorDOMTrabajos.innerHTML = "";
    for (let trabajo of trabajos){
        // creamos el div
        let cajasTrabajo = document.createElement('div');
        // le agregamos una clase a nuestro div recien creado
        cajasTrabajo.classList.add('cajastrabajo');
        // cargamos de contenido el nuevo elemento
        cajasTrabajo.innerHTML = `
        <div class="trabajos">
                        <div class="thumb">
                            <img src=${trabajo.imagen} alt="cripto la plata" width="500px" height="350px">
                        </div>
                        <div class="descripcion">
                            <p class="nombre">${trabajo.nombre}</p>
                            <p class="categoria">${trabajo.categoria}</p>
                            <p class="resumen">${trabajo.resumen}</p>
                            <div class="botones">
                                <div class="boton-pf">
                                    <a href="${trabajo.pflink}}" class="btnVisitar">${trabajo.botonpf}</a>
                                </div>
                                <div class="boton-vp">
                                    <a href="${trabajo.vplink}">${trabajo.botonvp}</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        contenedorDOMTrabajos.appendChild(cajasTrabajo);
    }
}

// funcion para el boton modo oscuro / claro
btnMode.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    btnMode.classList.toggle('active');
})

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
        scrollTop: portfolio + 80
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




//mostrar sobre mi
$('#efectoAcerca').mouseover(function (e) {
    e.preventDefault();
    $('#cajaTexto').show();
});
$('#efectoAcerca').mouseout(function (e) {
    e.preventDefault();
    $('#cajaTexto').hide();
});