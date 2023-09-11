const express = require('express');
const router = express.Router();
const db = require('../../../db');



router.delete("/image/:id", async (req, res) => {
    try {

        let paramId = Number(req.params.id)

        const result = await db.query('DELETE FROM images WHERE id = $1', [paramId]);


        if (result.rowCount === 1) {
            // console.log('Image deleted successfully');
            res.send({'message':'Zdjęcie zostało usunięte'})
        } else {
            // console.log('Image not found or deletion failed');
            res.send({'message':'Błąd podczas usuwania zdjęcia'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
  });





module.exports = router;