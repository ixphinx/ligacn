const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    /*----- Divisionales-------*/
    divisional: String,
    
    /*---- Cuentas de Usuarios ----*/
    user: String,
    password: String,
    username: String,
    userlastname: String,
    aproved: Boolean,
    usertype: String,
    

    /*---- Jugadores ----- */
    jnombre: String,
    jimg: String,
    japellido: String,
    jcedula: String,
    jgoles: Number,
    jtarjetasam: Number,
    jtarjetasdam: Number,
    jtarjestasroj: Number,
    jamonestaciones: String,
    jamonestacionid: String,
    jfechaamonestacion: String,
    jfechainicioamonestacion: String,
    jequipo: String,

    /*------ Equipos ----- */
    enombre: String,
    eescudo: String,
    edivision: String,
    

    /*------- Torneos ------*/
    tnombre: String,
    tdivisional: String,


    /*------- Fechas -------*/
    fnombre: String,
    ftorneo: String,


    /*------- Partidos ------*/
    pfechaid: String,
    pdate: String,
    ptime: String,
    pequipoa: String,
    pequipob: String,
    peamarcador: Number,
    pebmarcador: Number,
    peagoles: String,
    pebgoles: String,
    pamarillasa: String,
    pamarillasb: String,
    projasa: String,
    projasb: String,
    pfpa: Number,
    pfpb: Number,
    parbitro: String,
    pobservaciones: String,
    pcancha: String,
    
    // Estadisticas ///////////////////////////////////////////////////////
    epartidoid: String,
    eequipo: String,
    ejugador: String,
    egoles: String,
    eamarillas: String,
    erojas: String,

    
    
    /*------ imagenes ----- */
    imgdiv: String,
    imgurl: String,


});

module.exports= mongoose.model('Data', Data);
