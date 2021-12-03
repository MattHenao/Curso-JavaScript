//* Ejercicio de clases y herencia

// Clase persona
class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
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

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}

// Clase empleado
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleados = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleados(){
        return this._idEmpleados;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ' ' + this._idEmpleados + ' ' + this._sueldo;
    }
}

// Clase cliente
class Cliente extends Persona{
    static contadoClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadoClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

// Prueba clase persona
let persona1 = new Persona('Juan', 'Perez', 28);
console.log(persona1.toString());
let persona2 = new Persona('Matt', 'Henao', 19);
console.log(persona2.toString());

// Prueba clase empleado
let empleado1 = new Empleado('Diego', 'Rincones', 24, 5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Zapata', 20, 5000);
console.log(empleado2.toString());

// Prueba clase cliente
let cliente1 = new Cliente('Roberto', 'Vanegas', 37, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('Maria', 'Quintero', 28, new Date());
console.log(cliente2.toString());