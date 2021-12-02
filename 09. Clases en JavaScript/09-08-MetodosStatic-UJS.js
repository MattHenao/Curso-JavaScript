//* Metodos static

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }

    // Definicion metodo estatico
    static saludar(){
        console.log('Saludar desde metodo Static');
    }

    // Podemos pasar como argumento un objeto y acceder a parametros del objeto
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
        }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Matt', 'Henao');
let empleado1 = new Empleado('Hola', 'feo', 'sys');

/* No es posible llamar metodo static desde objeto
! persona1.saludar();
*/
Persona.saludar();

 // Llamar el objeto
Persona.saludar2(persona1);

// Herencia en clase hija
Empleado.saludar()

// Llamar objeto con clase hija
Empleado.saludar2(empleado1);