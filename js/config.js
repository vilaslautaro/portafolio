var requirejs = require('requirejs');

requirejs.config({
    // Pasar el main.js / index.js de nivel superior requerido
    // función para requirejs para que los módulos de nodo
    // se cargan en relación con el archivo JS de nivel superior.
    nodeRequire: require
});

requirejs(['foo', 'bar'],
function   (foo,   bar) {
    // foo y bar se cargan de acuerdo con requirejs
    // config, pero si no se encuentra, los nodos requieren
    // se usa para cargar el módulo.
});