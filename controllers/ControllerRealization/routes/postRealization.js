const express = require('express');
const router = express.Router();
const db = require('../../../db');

router.post("/create", async(req, res, next) =>{
    var errors = []
    if(!req.body.title){
        errors.push("Nie podano tytułu realizacji")
    }
    if(!req.body.description){
        errors.push("Nie podano opisu")
    }
    // if(!req.body.imageCount){
    //     errors.push("Nie podano liczby zdjęć")
    // }
    
    // add weblink
    if (errors.length) {
        res.status(400).json({"error": errors.join(",")})
        return
    }
    let created_at = Date()

    let data={
        title:req.body.title,
        description:req.body.description,
        // imageCount:req.body.imageCount,
        created_at: created_at
    }
    let lastInsertOfferId
    try{
        // let param = [req.params.id]

        let body =[data.title, data.description, data.created_at,]
        let returnOfferRow = await db.query("INSERT INTO realizations(title, description, created_at) VALUES ($1,$2,$3)RETURNING id",body)
        
        // console.log(experiences)
        lastInsertOfferId = returnOfferRow.rows[0].id;

        

        

    }catch (error) {
        res.status(400).json({"error": error.message})
        
        return;
    }
    res.json({
        "message": lastInsertOfferId
    })
    
});

module.exports = router;









module.exports = router;