//* get y set en clases

class Persona {
    constructor(nombre, apellido){
        // Nombres de propiedades empiezan con "_"
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

// Acceder atributo de nombre de manera indirecta con metodo get
console.log(persona1.nombre);

// Modificar el valor "nombre" con metodo set
persona1.nombre = 'Salo';
console.log(persona1.nombre);