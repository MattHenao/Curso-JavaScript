let persona = {
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28,
    idioma:'ES',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}
console.log(persona.lang);

persona.lang = 'us'
console.log(persona.lang);
console.log(persona.idioma);