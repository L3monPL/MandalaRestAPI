const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../../../db');

const ACCESS_TOKEN = 'gfdssdff43f45f45fe3as45e4wfs656f45'

router.post("/login", async(req, res, next) =>{
    var errors = []
    if(!req.body.email){
        errors.push("Nie podano emaila")
    }
    if(!req.body.password){
        errors.push("Nie podano hasła")
    }

    if (errors.length) {
        res.status(400).json({"error": errors.join(",")})
        return
    }

    let created_at = Date()

    let data={
        email:req.body.email,
        password:req.body.password,
        created_at: created_at
    }
    // let lastInsertOfferId
    try{
        let currentUserLoginEmail = await db.query("SELECT email FROM users WHERE email = $1",[data.email])
        var currentUserEmail = currentUserLoginEmail.rowCount

        if (!currentUserEmail) {
            res.status(401).json({"message":"Podany adres Email nie istnieje"})
            return
        }
        if (currentUserEmail) {
            let currentUserLoginPassword = await db.query("SELECT email, id FROM users WHERE email = $1 AND password = $2",[data.email, data.password])
            var currentUserPassword = currentUserLoginPassword.rowCount
            var currentLoginUser = currentUserLoginPassword.rows[0]
            if (!currentUserPassword) {
                res.status(401).json({"message":"Podane hasło jest błędne"})
                return
            }
        }

        // let param = [req.params.id]

        // let body =[data.title, data.description, data.created_at,]
        // let returnOfferRow = await db.query("INSERT INTO realizations(title, description, created_at) VALUES ($1,$2,$3)RETURNING id",body)
        
        // // console.log(experiences)
        // lastInsertOfferId = returnOfferRow.rows[0].id;
    }catch (error) {
        res.status(401).json({"message":"Błąd serwera"})
        return;
    }
    try {
        // let payload = {
        //     "id": currentUserID,
        //     "username": currentUserName,
        //     "currentUserEmail": currentUserEmail
        // }

        var token = jwt.sign(currentLoginUser, ACCESS_TOKEN)

    } catch (error) {
        console.error(error)
        res.status(500).send(error)
        return
    }
    res.json(
        token
    )
    
});

module.exports = router;









module.exports = router;