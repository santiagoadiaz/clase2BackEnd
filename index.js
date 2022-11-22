class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        const cantidadMascotas = this.mascotas.lenth
        console.log(`${cantidadMascotas}`)
    }

    addBook(titulo, autor) {
        this.libros.push({ nombre: titulo, escritor: autor })
    }

    getBookNames() {
        this.libros.map(autor => console.log(`${autor.titulo}`))
    }

}

const Load = new Usuario('Pedro', 'Perez', [{ nombre: "El Legado", escritor: "German Beder" }], 'Perro')