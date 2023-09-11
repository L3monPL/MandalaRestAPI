const express = require('express');
const router = express.Router();
const db = require('../../../db');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post("/:id/image/:position", upload.single('image'), async(req, res, next) =>{
    var errors = []
    // const { buffer } = req.file;
    const imageBuffer = req.file?.buffer
    console.log(req.file)
    // if(!req.body.image){
    //     errors.push("Nie dodano zdjęcia")
    // }
    // if(!req.body.position){
    //     errors.push("Nie podano pozycji zdjęcia")
    // }
    // if(!req.body.imageCount){
    //     errors.push("Nie podano liczby zdjęć")
    // }
    
    // add weblink
    // if (errors.length) {
    //     res.status(400).json({"error": errors.join(",")})
    //     return
    // }
    let created_at = Date()

    // let data={
    //     title:req.body.title,
    //     description:req.body.description,
    //     // imageCount:req.body.imageCount,
    //     created_at: created_at
    // }
    // let lastInsertOfferId
    // try{
    //     // // let param = [req.params.id]

    //     // let body =[data.title, data.description, data.created_at,]
    //     // let returnOfferRow = await db.query("INSERT INTO realizations(title, description, created_at) VALUES ($1,$2,$3)RETURNING id",body)
        
    //     // // console.log(experiences)
    //     // lastInsertOfferId = returnOfferRow.rows[0].id;

        

        

    // }catch (error) {
    //     res.status(400).json({"error": error.message})
        
    //     return;
    // }
    res.json({
        "message": imageBuffer
    })
    
});

module.exports = router;









module.exports = router;