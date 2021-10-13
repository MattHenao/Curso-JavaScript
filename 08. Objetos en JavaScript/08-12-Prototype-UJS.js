//* Funcion prototype
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //* Agregar metodos
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//* Uso de prototype
Persona.prototype.tel = '120293201';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '123112'
console.log(padre.tel);

let madre = new Persona('Mary', 'Henao', 'mhenao@mail.com');
console.log(madre.tel);