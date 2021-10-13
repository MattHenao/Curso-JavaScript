//* Metodo get en objetos

let persona = {
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28,
    /* Metodo get sirve para acceder y modificar los valores
        de las propiedades de los objetos
    */
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);
