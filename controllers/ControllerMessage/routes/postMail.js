const express = require('express');
const router = express.Router();
const db = require('../../../db');
const Joi = require('joi');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: 'mikolaj.andrzejewski999@gmail.com',
      pass: 'fgdfgdfgdfdfgdf',
    },
  });

//   mkbvwyitxd
//    xdjqtjhkza

router.post("", async(req, res, next) =>{

    const emailSchema = Joi.object({
        email: Joi.string().required(),
        text: Joi.string().required(),
    });

    const { error } = emailSchema.validate(req.body);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return
    }

    var errors = []

    const { text } = req.body;

    let to = 'minecarftmikas04@gmail.com'

    let subject = 'Wiadomość z formularza www.mandalanieruchomosci.pl'

    const mailOptions = {
        from: 'mikolaj.andrzejewski999@gmail.com',
        to,
        subject,
        text,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          res.status(500).send('Email could not be sent');
          return
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
          return
        }
    });
});

module.exports = router;
