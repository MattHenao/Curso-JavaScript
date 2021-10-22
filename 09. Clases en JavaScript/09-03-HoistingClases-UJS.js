//! NO es posible crear objetos antes de declarar la clase
//! No se aplica el concepto de hoisting
//! let persona2 = new Persona('Karla', 'Juarez');

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //* Creacion de metodo get
    get nombre(){
        return this._nombre;
    }

    //* Creacion de metodo set
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Matt', 'Henao');

console.log(persona1.nombre);

persona1.nombre = 'Salo';
console.log(persona1.nombre);