const express = require('express');
const router = express.Router();
const db = require('../../../db');



router.get("", async (req, res) => {
    try {
      // query the database to retrieve all data from the "users" table
      const { rows } = await db.query('SELECT * FROM realizations');
      // send the retrieved data as the response
      var list = new Array()


      for (let index = 0; index < rows.length; index++) {
        
        let listImage = []

        for (let index = 0; index < rows.length; index++) {
          let imageObject = await db.query('SELECT id, realizationId, position, description, created_at FROM images WHERE realizationId = $1', [rows[index].id]);
          listImage.push(imageObject.rows[0])
        }

        // console.log(imageObject)

        list.push({
          id: rows[index].id,
          title: rows[index].title,
          description: rows[index].description,
          images: listImage,
          created_at: rows[index].created_at
        })
      }

      console.log(list)

      res.send(list);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });





module.exports = router;