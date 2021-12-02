//* Constantes estaticas
class Persona{
    static contadorPersona = 0;
    // Crear constante estatica con get
    static get MAX_OBJ(){
        return 3;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log('Se han superado el maximo de objetos permitidos');
        }
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
let empleado1 = new Empleado ('Matt', 'Henao', 'Sys');
let persona2 = new Persona('Paco', 'Loko');
// Aqui va a aparecer el mensaje porque se supero el maximo de obj creados
let persona3 = new Persona('Diego', 'Rincones');