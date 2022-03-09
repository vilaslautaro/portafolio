document.addEventListener('DOMContentLoaded', function () {
  // --------------- EVENTOS FORMULARIO ----------------------
  // agregar evento de enter a los inputs del formulario
  function agregarEventoInputs() {
    for (const inputForm of inputsForm) {
        inputForm.addEventListener('keypress', event => event.keyCode === 13 ? enviarFormulario(event) : null)
    }
}
  agregarEventoInputs()
  
  // ---------------------- EFECTO SCROLL ENLACES MENU ----------------------------------------
  // recorremos los enlaces y le agregamos un evento a cada uno
  for (const enlaceMenu of enlacesMenu) {
    enlaceMenu.addEventListener('click', scrollSeccion)
  }

  // funcion que hace referencia a cada seccion
  function scrollSeccion(e) {
    e.preventDefault()
    // guardamos la informacion del atributo href del enlace en el que hicimos click
    const referenciaHref = this.getAttribute('href')
    // con offSetTop obtenemos la distancia del elemento actual(enlace clickeado) y lo guardamos en una variable
    const getDistanciaSeccion = document.querySelector(referenciaHref).offsetTop;
    // scroll le pasamos los parametros: top con la distancia del elemento que clickeamos y behavior 'smooth' que hace que el desplazamiento sea "suave"
    window.scroll({
      top: getDistanciaSeccion,
      behavior: 'smooth'
    })
  }

  // ------------ efecto abrir y cerrar menu movil ---------------------
  let btnNav = document.getElementById('menuToggle');
  let Nav = document.getElementById('menu');
  btnNav.addEventListener('click', () => {
    Nav.classList.toggle('activado');
  });

  // ------------- animacion texto en contenedor header ---------------------
  new Typed('.typed', {
    stringsElement: '#cadenas-texto',
    smartBackspace: true,
    typeSpeed: 75,
    startDelay: 200,
    backSpeed: 75,
    shuffle: false,
    backDelay: 800,
    loop: true,
    loopCount: false,
    showCursor: true,
  });

  // funcion de particles.js animacion de las particulas de fondo
  particles()

}, false);