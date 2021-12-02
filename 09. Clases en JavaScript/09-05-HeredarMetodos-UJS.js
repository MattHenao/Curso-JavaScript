//* Heredar metodos

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

    //Crear metodo
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llama los atributos de la clase padre
        this._departamento = departamento;
        }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado ('Mateo', 'Henao', 'Sistemas');
console.log(empleado1.nombreCompleto());