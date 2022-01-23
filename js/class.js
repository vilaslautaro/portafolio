class Trabajos{
    constructor(nombre, imagen, categoria, resumen, botonpf, pflink, botonvp, vplink){
        this.nombre = nombre;
        this.imagen = imagen;
        this.categoria = categoria;
        this.resumen = resumen;
        this.botonpf = botonpf;
        this.pflink = pflink;
        this.botonvp = botonvp;
        this.vplink = vplink;
    }
}


$.get("data/trabajos.json", function(respuesta, estado){
    if(estado == 'success'){
        for (let trabajo of respuesta){
            trabajos.push(new Trabajos(trabajo.nombre, trabajo.imagen, trabajo.categoria, trabajo.resumen, trabajo.botonpf, trabajo.pflink, trabajo.botonvp, trabajo.vplink));
        }
        creadorUITrabajos(trabajos);
    } else{
        console.log('Error en la carga de los trabajos');
    }
});