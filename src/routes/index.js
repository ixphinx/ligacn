const express = require('express');
const router = express.Router();
const path = require('path');
const { unlink } = require('fs-extra');
const cloudinary = require('cloudinary');
const fs = require('fs-extra');

const Data = require('../models/database');

cloudinary.config({ 
    cloud_name: 'dhzgjgjpk', 
    api_key: '862754171147947', 
    api_secret: '8Aq3DIe9YwsP2Bi4pXwO4fYu6aY',
  });

  router.post('/images/add', async (req, res) => {
    const { title, description } = req.body;
    for (let i = 0; i < req.files.length; i++) {
        const element = req.files[i];
        try {
            const result = await cloudinary.v2.uploader.upload(req.files[i].path);
            const newPhoto = new Data({title, description, imageURL: result.url, public_id: result.public_id});
            await newPhoto.save();
            await fs.unlink(req.files[i].path);
        } catch (e) {
            console.log(e)
        }
        
    }
      res.redirect('/');

});

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
