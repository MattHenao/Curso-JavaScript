// Sobreescritura

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    // Aqui se aplica la sobreescritura
    obtenerDetalles(){
        return `Gerente ${super.obtenerDetalles()} depto: ${this._departamento}`
    }
}

// Prueba de sobreescritura
let empleado1= new Empleado('Paco', 1000)
console.log(empleado1.obtenerDetalles());
let geren1 = new Gerente('Matt', 1500, 'Sistemas');
console.log(geren1.obtenerDetalles());