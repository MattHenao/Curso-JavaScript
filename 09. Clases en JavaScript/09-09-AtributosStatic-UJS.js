//* Atributos static

class Persona{
    // Definir variable estatica
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // Podemos acceder a ella desde el constructor
        Persona.contadorObjetosPersona++;
        console.log('El numero de objetos creados es de: ' + Persona.contadorObjetosPersona);
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

let persona1 = new Persona('Matt', 'Henao');
let empleado1 = new Empleado('Hola', 'feo', 'sys');

/* No hacer esto
! persona1.contadorObjetosPersona;
*/
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);