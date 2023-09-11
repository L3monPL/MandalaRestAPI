const express = require('express');
const router = express.Router();
const db = require('../../../db');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const { Bloob } = require('buffer');
const bodyParser = require('body-parser');
const fs = require('fs')


router.post("/:id/image/:position", bodyParser.raw({type: ['image/jpeg', 'image/png'], limit: '10mb'}), async(req, res, next) =>{
    var errors = []
    // const { buffer } = req.file;
    // const imageBuffer = req.file?.buffer
    // let base64data = imageBuffer.toString('base64');
    // console.log(base64data)
    let paramId = Number(req.params.id)
    let paramPosition = Number(req.params.position)
    var imageUpload = req.body

    console.log(req.body)
    console.log(paramId)
    console.log(paramPosition)
    // fs.writeFileSync('image.png', req.body)


    if(!req.body){
        errors.push("Nie dodano zdjęcia")
    }
    if(!paramPosition){
        errors.push("Nie podano pozycji zdjęcia")
    }

    let created_at = Date()

    var data = {
        image: req.body,
        position: paramPosition,
        realizationId: paramId,
        created_at: created_at
    }

    try{
        let body = [data.realizationId, data.position, data.image, data.created_at]
        await db.query("INSERT INTO images(realizationId, position, image, created_at) VALUES ($1,$2,$3,$4)",body)

    }catch (error) {
        res.status(400).json({"error": error.message})
        
        return;
    }

    res.json({
        "message": 'Dodano zdjęcie'
    })
    
});

module.exports = router;









module.exports = router;