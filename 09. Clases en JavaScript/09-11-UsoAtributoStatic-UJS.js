//* Uso de atributos static

class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersona;
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
        return this.idPersona + ' ' +this._nombre + ' ' + this._apellido
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludar desde metodo Static');
    }

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

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());
let empleado1 = new Empleado ('Matt', 'Henao', 'Sys');
console.log(empleado1.toString());