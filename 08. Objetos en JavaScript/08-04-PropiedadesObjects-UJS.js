let persona = {
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28
}

//* Otra manera de llamar las propiedades

console.log(persona['apellido']);

//* For in

for(propiedades in persona){
    console.log(propiedades);
    console.log(persona[propiedades]);
}