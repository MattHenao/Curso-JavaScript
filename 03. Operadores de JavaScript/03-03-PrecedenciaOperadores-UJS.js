//* Prioridades de operadores
let a = 3, b = 2, c = 1, d = 4;

//* Mult y div tienen prioridad a la sum y rest
let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log( z );

//* Los () tienen mas prioridad
z = (c + a) * b / c;
console.log(z);

// La prioridad es de izquierda a derecha