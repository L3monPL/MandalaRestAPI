const express = require('express');
const router = express.Router();
const db = require('../../../db');



router.get("/paginator", async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the page number from query parameters
    const pageSize = parseInt(req.query.pageSize) || 4; // Set the page size (default: 10)
    try {
      // query the database to retrieve all data from the "users" table
      const { rows } = await db.query('SELECT * FROM realizations');
      // send the retrieved data as the response
      var list = new Array()


      for (let index = 0; index < rows.length; index++) {
        
        let imageObject = await db.query('SELECT id, realizationId, position, description, created_at FROM images WHERE realizationId = $1', [rows[index].id]);

        list.push({
          id: rows[index].id,
          title: rows[index].title,
          description: rows[index].description,
          images: imageObject.rows,
          created_at: rows[index].created_at
        })
      }
        const realizationOnList = list.length
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        const paginatedData = list.slice(startIndex, endIndex);

      console.log(realizationOnList)

      res.send({
        listCount: realizationOnList,
        list: paginatedData
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });





module.exports = router;