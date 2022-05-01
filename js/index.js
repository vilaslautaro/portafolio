document.addEventListener('DOMContentLoaded', function () { 

  function agregarEventoInputs() {
    for (const inputForm of inputsForm) {
        inputForm.addEventListener('keypress', event => event.keyCode === 13 ? enviarFormulario(event) : null)
    }
}
  agregarEventoInputs()
  

  for (const enlaceMenu of enlacesMenu) {
    enlaceMenu.addEventListener('click', scrollSeccion)
  }

  function scrollSeccion(e) {
    e.preventDefault()
    const referenciaHref = this.getAttribute('href')
    const getDistanciaSeccion = document.querySelector(referenciaHref).offsetTop;
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

  particles()

}, false);