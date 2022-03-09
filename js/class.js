class Trabajos {
    constructor(nombre, imagen, categoria, resumen, proyecto, botonpf, pflink, botonvp, clasepf, clasevp, vplink) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categoria = categoria;
        this.resumen = resumen;
        this.proyecto = proyecto;
        this.botonpf = botonpf;
        this.pflink = pflink;
        this.botonvp = botonvp;
        this.clasepf = clasepf;
        this.clasevp = clasevp;
        this.vplink = vplink;
    }
}

class Skills {
    constructor(id, titulo, icono) {
        this.id = id;
        this.titulo = titulo;
        this.icono = icono;
    }
}

// function que ejecuta un for of pusheando el archivo JSON enviado como parametro, segun la url que tengamos como 2do parametro
function recorrerData(data, url){
    if(url === 'data/trabajos.json'){
        for (let trabajo of data) {
            trabajos.push(new Trabajos(trabajo.nombre, trabajo.imagen, trabajo.categoria, trabajo.resumen, trabajo.proyecto, trabajo.botonpf, trabajo.pflink, trabajo.botonvp, trabajo.clasepf, trabajo.clasevp, trabajo.vplink));
        }
        creadorUITrabajos(trabajos);
    }
    else if(url === 'data/skills.json'){
        for (let skill of data) {
            skills.push(new Skills(skill.id, skill.titulo, skill.icono));
        }
        creadorUISkills(skills);
    }
    else{
        console.log('Hubo un error')
    }
}

// funcion que utiliza fetch para llamar a url pasada por parametro
const request = async (url) => {
    const response = await fetch(url)
    // convertimos la respuesta en formato JSON
    const data = await response.json()
    // retornamos funcion callback y le enviamos como parametro el JSON y la url
    return recorrerData(data, url)
}

// pasamos la URL de los archivos JSON como parametro a la funcion request
request('data/trabajos.json')
request('data/skills.json')

