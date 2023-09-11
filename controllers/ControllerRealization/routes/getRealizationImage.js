const express = require('express');
const router = express.Router();
const db = require('../../../db');



router.get("/image/:id", async (req, res) => {
    try {
        let paramId = Number(req.params.id)

        const image = await db.query('SELECT image FROM images WHERE id = $1', [paramId]);
      // send the retrieved data as the response
    //   var list = new Array()


    //   for (let index = 0; index < rows.length; index++) {
        
    //     let imageObject = await db.query('SELECT id, realizationId, position, description, created_at FROM images WHERE realizationId = $1', [rows[index].id]);

    //     list.push({
    //       id: rows[index].id,
    //       title: rows[index].title,
    //       description: rows[index].description,
    //       images: imageObject.rows,
    //       created_at: rows[index].created_at
    //     })
    //   }

      console.log(image.rows[0].image)

      res.send(image.rows[0].image);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });





module.exports = router;