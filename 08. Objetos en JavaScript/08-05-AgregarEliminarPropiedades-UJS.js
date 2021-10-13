let persona = {
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28
}

//* Para agregar propiedad
persona.tel = '54715716';
console.log(persona);

//* Modificar una propopiedad
persona.tel = '5s';
console.log(persona);

//* Eliminar propiedades
delete persona.tel;
console.log(persona);