const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//config
app.set('port', process.env.PORT || 3000);

//database
const URI = 'mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/ligacn?retryWrites=true&w=majority';
mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));   


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



//routes
app.use('/api', require('../src/routes/index'));


//server
app.listen(app.get('port'), ()=>{
    console.log('Servidor LigaCN-webmain en puerto ', app.get('port'));
})
