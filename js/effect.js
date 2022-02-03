// efecto abrir y cerrar menu movil
let btnNav = document.getElementById('menuToggle');
let Nav = document.getElementById('menu');

btnNav.addEventListener('click', () => {
    Nav.classList.toggle('activado');
});

// $('.contenedor').click(animacionSkills);
// function animacionSkills(e) {
//     e.preventDefault();
//     const skillSeleccionada = skills.find(skill => skill.id == e.target.id);
//     console.log(skillSeleccionada);
//     console.log(skillSeleccionada.id);
// }

// animacion profesion en contenedor header
const typed = new Typed('.typed', {
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

