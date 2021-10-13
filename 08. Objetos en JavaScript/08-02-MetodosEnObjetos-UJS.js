let persona = {
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28,

    //* Crear un metodo
    nombreCompleto: function(){
        return this.nombre + ' ' +  this.apellido;
    }
}

//* Mandar a llamar la funcion
console.log(persona.nombreCompleto());