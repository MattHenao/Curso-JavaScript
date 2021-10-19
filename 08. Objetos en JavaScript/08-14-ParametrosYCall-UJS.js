//* Pasar argumentos con call()
let persona1 = {
    nombre:'Juan',
    apellido:'Perez',
    // Se pasan los argumentos
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido:'Lara'
}

// Se llaman los valores de los argumentos
console.log(persona1.nombreCompleto('Lic', '2704574'));

// Para la funcion call
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '5552728'));