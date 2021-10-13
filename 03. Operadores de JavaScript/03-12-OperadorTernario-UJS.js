//* Operador ternario

/*
    Es el unico operador de JS que tiene 3 operandos
    Se usa con frecuencia coo atajo para instruccion if
*/

let language = 'Javascript';
let dynamic = (language === 'Javascript') ? true:false;

console.log(dynamic);

let numero = 9;
let divisible = (numero % 2 == 0) ? 'Es par':'Es impar';
 console.log(divisible);