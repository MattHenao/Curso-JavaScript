//* Crear objetos con funcion constructora
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //* Agregar metodos
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//* Crear nuevos objetos
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Mary', 'Henao', 'mhenao@mail.com');
console.log(madre);

//* Editar valores de propiedades
padre.nombre = 'Carlos';
console.log(padre);

console.log(padre.nombreCompleto)