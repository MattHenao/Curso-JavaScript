//* Metodo apply
let persona1 = {
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido:'Lara'
}

//* Uso de apply
// Crear un array
let arreglo = ['Ing', '2574864'];

// Usar apply
console.log(persona1.nombreCompleto.apply(persona2, arreglo));