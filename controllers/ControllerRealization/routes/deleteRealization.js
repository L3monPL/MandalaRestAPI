const express = require('express');
const router = express.Router();
const db = require('../../../db');



router.delete("/:id", async (req, res) => {
    try {

        let paramId = Number(req.params.id)

        const result = await db.query('DELETE FROM realizations WHERE id = $1', [paramId]);

        const imagesDelete = await db.query('DELETE FROM images WHERE realizationId = $1', [paramId]);

        if (result.rowCount === 1) {
            // console.log('Image deleted successfully');
            res.send({'message':'Realizacja została usunięta'})
        } else {
            // console.log('Image not found or deletion failed');
            res.send({'message':'Błąd podczas usuwania realizacji'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
  });





module.exports = router;