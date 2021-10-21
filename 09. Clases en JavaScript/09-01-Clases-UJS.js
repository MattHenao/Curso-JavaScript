//* Clases en JavaScript

//* Creacion de una clase
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//* Creacion de objetos a partir de la clase
let persona1 = new Persona('Matt', 'Henao');
console.log(persona1);

let persona2 = new Persona('Salo', 'Henao');
console.log(persona2);