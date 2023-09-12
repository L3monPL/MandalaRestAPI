const express = require('express');
const router = express.Router();
const db = require('../../../db');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN = 'gfdssdff43f45f45fe3as45e4wfs656f45'


router.get("/auth", async (req, res) => {

    const token = req.header('Authorization');

    jwt.verify(token, ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
    
        // Attach the decoded user information to the request for later use
        req.user = decoded;
    
        // next(); // Continue to the next middleware or route
      });

    try {
      // query the database to retrieve all data from the "users" table
    //   const { rows } = await db.query('SELECT id, email, created_at FROM users');
      // send the retrieved data as the response
      res.send(req.user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });





module.exports = router;