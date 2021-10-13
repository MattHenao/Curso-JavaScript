//* Formas de concatenar cadenas

//* Declaracion
var nombre = 'Juan';
var apellido = 'Perez';

// 1
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// 2
var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

// 3
var x = nombre + 2 + 4;
console.log(x);

// 4
x = nombre + (2 + 4);
console.log(x);

//5
x = 2 + 4 + nombre;
console.log(x);