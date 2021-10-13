//* Formas de imprimir un objeto

let persona = {
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28
}

//* Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido); // etc

//* for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//* Como array
let personaArray = Object.values(persona);
console.log(personaArray);

//* Como string
let personaString = JSON.stringify(persona);
console.log(personaString);