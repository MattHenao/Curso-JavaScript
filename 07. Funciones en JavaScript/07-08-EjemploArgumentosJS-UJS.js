//* Mini ejercicio

let resultado = sumaTodo(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(resultado);

function sumaTodo(){
    let sumar = 0;
    for(i = 0; i < arguments.length; i++){
        sumar += arguments[i];
    }
    return sumar;
}