$(document).ready(function () {
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

  // particles.js animacion particulas
  particlesJS(
      {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 1025.8919341219544
              }
            },
            "color": {
              "value": "#ffd100"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 3
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.8286050237138863,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 16.783216783216783,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 157.82952832645452,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 5,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "remove"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 119.88011988011989,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }
  );
});
