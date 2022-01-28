// esta funcion es la que crea dinamicamente cada trabajo en el DOM
// (usamos JS Vanilla para realizar esta funcion)
function creadorUITrabajos(trabajos) {
    contenedorDOMTrabajos.innerHTML = "";
    for (let trabajo of trabajos) {
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
                                    <a href="${trabajo.pflink}" class="btnVisitar">${trabajo.botonpf}</a>
                                </div>
                                <div class="boton-vp">
                                    <a href="${trabajo.vplink}">${trabajo.botonvp}</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        // agregamos nuestro elemento creado como hijo del contenedorTrabajos en el DOM
        contenedorDOMTrabajos.appendChild(cajasTrabajo);
    }
}

// funcion para el boton modo oscuro / claro
btnMode.addEventListener('click', function () {
    // agregamos clase dark al body
    document.body.classList.toggle('dark');
    // agregamos clase active al boton
    btnMode.classList.toggle('active');
    // cambiamos a la imagen de fondo gris
    $('#imgPerfil').attr("src", "img/perfildark.png");

    // guardamos la eleccion del usuario en el localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('modoOscuro', 'activado');
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
        // regresamos a la imagen original
        $('#imgPerfil').attr("src", "img/perfil.png");
    }
});

function localStorageModo() {
    // segun el valor del localStorage ejecutamos o no el modo oscuro
    if (localStorage.getItem('modoOscuro') === 'activado') {
        // agregamos clase dark al body
        document.body.classList.add('dark');
        // cambiamos a la imagen de fondo gris
        $('#imgPerfil').attr("src", "img/perfildark.png");
        // agregamos clase active al boton
        btnMode.classList.add('active');
    } else {
        // eliminar la clase dark al body
        document.body.classList.remove('dark');
        // regresamos a la imagen original
        $('#imgPerfil').attr("src", "img/perfil.png");
        // removemos clase active al boton
        btnMode.classList.remove('active');
    }
}
localStorageModo();


function creadorUISkills(skills) {
    contenedorDOMSkills.innerHTML = "";
    for (let skill of skills) {
        // creamos el div
        let cajasSkills = document.createElement('div');
        // le agregamos una clase a nuestro div recien creado
        cajasSkills.classList.add('cajaserv');
        // cargamos de contenido el nuevo elemento
        cajasSkills.innerHTML = `
        <div class="servicio" id="${skill.id}">
                        <img class="imagenserv" src="${skill.icono}" alt="ecommerce" width="75px">
                        <p><span class="bold">
                                <h4>${skill.titulo}</h4>
                            </span><br>
                        <h5 class="categoriaserv">${skill.categoria}</h5><br>
                        <p class="textoserv">${skill.texto}</p>
                        </p>
                    </div>
        `;
        // agregamos nuestro elemento creado como hijo del contenedorskillss en el DOM
        contenedorDOMSkills.appendChild(cajasSkills);
    }
}

//mostrar sobre mi
$('#efectoAcerca').mouseenter(function (e) {
    e.preventDefault();
    $('#cajaTexto').show();
});
$('#efectoAcerca').mouseout(function (e) {
    e.preventDefault();
    $('#cajaTexto').hide();
});