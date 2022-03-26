function creadorUITrabajos(trabajos) {
    contenedorDOMTrabajos.innerHTML = "";
    for (let trabajo of trabajos) {
        let cajasTrabajo = document.createElement('div');
        cajasTrabajo.classList.add('cajastrabajo');
        cajasTrabajo.innerHTML = `
        <div class="trabajos">
                        <div class="thumb">
                            <img src=${trabajo.imagen} alt="cripto la plata" >
                        </div>
                        <div class="descripcion">
                            <p class="nombre">${trabajo.nombre}</p>
                            <p class="categoria">${trabajo.categoria}</p>
                            <p class="proyecto">${trabajo.proyecto}</p> 
                            <p class="resumen">${trabajo.resumen}</p>
                            <div class="botones">
                                <div class="boton-pf ${trabajo.clasepf}">
                                    <a href="${trabajo.pflink}" target="_blank" class="btnVisitar">${trabajo.botonpf}</a>
                                </div>
                                <div class="boton-vp ${trabajo.clasevp}">
                                    <a href="${trabajo.vplink}" target="_blank" >${trabajo.botonvp}</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        contenedorDOMTrabajos.appendChild(cajasTrabajo);
    }
}



function creadorUISkills(skills) {
    contenedorDOMSkills.innerHTML = "";
    for (let skill of skills) {
        let cajasSkills = document.createElement('div');
        cajasSkills.classList.add('cajaserv');
        cajasSkills.innerHTML = `
        <div class="servicio" id="${skill.id}">
                        <img class="imagenserv" src="${skill.icono}" alt="ecommerce" width="75px">
                        <h5 class="tituloSkill" id="tituloSkill">${skill.titulo}</h5>
                    </div>
        `;
        contenedorDOMSkills.appendChild(cajasSkills);
    }
}


btnMode.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    btnMode.classList.toggle('active');
    imgPerfil.setAttribute("src", "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643845930/portfolio/perfil/perfildark_dkwxs4.png");

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('modoOscuro', 'activado');
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
        // regresamos a la imagen original
        imgPerfil.setAttribute("src", "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643845930/portfolio/perfil/perfil_mcleyh.png");
    }
});

function localStorageModo() {
    if (localStorage.getItem('modoOscuro') === 'activado') {
        document.body.classList.add('dark');
        imgPerfil.setAttribute("src", "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643845930/portfolio/perfil/perfildark_dkwxs4.png");
        btnMode.classList.add('active');
    } else {
        document.body.classList.remove('dark');
        imgPerfil.setAttribute("src", "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643845930/portfolio/perfil/perfil_mcleyh.png");
        btnMode.classList.remove('active');
    }
}
localStorageModo();

let fecha = new Date().getFullYear()
año.innerHTML = fecha;


