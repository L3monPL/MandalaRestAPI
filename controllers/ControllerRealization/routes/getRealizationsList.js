const express = require('express');
const router = express.Router();
const db = require('../../../db');



router.get("", async (req, res) => {
    try {
      // query the database to retrieve all data from the "users" table
      const { rows } = await db.query('SELECT * FROM realizations');
      // send the retrieved data as the response
      res.send(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });





module.exports = router;