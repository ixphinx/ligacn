const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    /*-----index-----*/
    ipart:String,
    iparc:String,
    
    /*----- Divisionales-------*/
    divisional: String,
    
    /*---- Cuentas de Usuarios ----*/
    user: String,
    password: String,
    username: String,
    userlastname: String,
    userci: String,
    aproved: Boolean,
    usertype: String,
    
    
    /*----- Noticias---- */
    noticias:String,

    /*------ Comentarios -----*/
    comhead: String,
    combody: String,
    comhead1: String,
    combody1: String,
    
     /*------ Backgrounds -----*/
    backgrounda: String,
    backgroundb: String,
    backgroundc: String,
    backgroundfem: String,
    backgroundf:String,

    /*---- Jugadores ----- */
    jnombre: String,
    jimg: String,
    jescudo: String,
    japellido: String,
    jcedula: String,
    jgenero: String,
    jgoles: Number,
    jtarjetasam: Number,
    jtarjetasdam: Number,
    jtarjestasroj: Number,
    jamonestaciones: String,
    jamonestacionid: String,
    jfechaamonestacion: String,
    jfechainicioamonestacion: String,
    jequipo: String,
    jdivision: String,

    /*------ Equipos ----- */
    enombre: String,
    eescudo: String,
    egenero: String,
    edivision: String,
    edelegado: String,
    edelcedula: String,
    epuntos: Number,
    epartidosj: Number,
    epartidosg: Number,
    epartidosempatados: Number,
    epartidosperdidos: Number,
    egolesmas: Number,
    egolesmenos: Number,
    esaldo: Number,
    efairplay: Number,

    /*------- Torneos ------*/
    tnombre: String,
    tdivisional: String,


    /*------- Fechas -------*/
    fnombre: String,
    ftorneo: String,


    /*------- Partidos ------*/
    ptorneo: String,
    pfecha: String,
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
    pid: String,
    pjugador: String,
    ppuntualidad: String,
    pfairplay: String,
    ppelota: String,
    pindumentaria: String,
    pformulario: String,

    /*---- Seguridad------*/
    paneladmin: String,
    delegado:String,

    /*----- Mensaje ----*/
    msgemail: String,
    msgbody: String,

    /*---- Kaygua ----*/
    msgname: String,
    msgmail: String,
    msgtel: String,
    msgtext: String,
    
    /*------ imagenes ----- */
    imgdiv: String,
    imgurl: String,
    
    /*------ Estadisticas ------*/
    estIdtorneo: String,
    estIdPartido: String,
    estIdEquipo: String,
    estIdJugador: String,
    estNombre: String,
    estApellido: String,
    estAmarilla: Number,
    estDobAmarilla: Number,
    estRoja: Number,
    estGol: Number,
    estAmonestacion: Number


});

module.exports= mongoose.model('Data', Data);
