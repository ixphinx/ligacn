const express = require('express');
const router = express.Router();


const Data = require('../models/database');


router.get('/', async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = await Data.find();
    res.json(data);
});

router.post('/', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = new Data(req.body);
    await data.save();
    res.json({
        status: 'Dato guardado'
    });
});

router.post('/update', async(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = await Data.update();
    res.json({
        status: 'Datos actualizados'
    });
})

router.get('/:id', async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = await Data.findById(req.params.id);
    res.json(data);
})

router.put('/:id', async (req, res)=>{
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    await Data.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Datos actuallizados'
    });
});

router.delete('/:id', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    await Data.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.json({
        status: 'Datos eliminados'
    });
});



module.exports= router;
