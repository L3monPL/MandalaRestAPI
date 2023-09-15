const express = require('express');
const router = express.Router();
const db = require('../../../db');
const Joi = require('joi');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mikolaj.andrzejewski999@gmail.com',
      pass: 'mkbvwyitjqtjhkza',
    },
  });

//   mkbvwyitxd
//    xdjqtjhkza

router.post("", async(req, res, next) =>{

    const emailSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        text: Joi.string().required(),
    });

    const { error } = emailSchema.validate(req.body);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return
    }

    var errors = []

    let { text,  name, email} = req.body;

    // text = email + name + 'napisał/a:' + text

    let to = 'biuro@mandalanieruchomosci.com'

    let subject = 'Wiadomość z formularza www.mandalanieruchomosci.com'

    const mailOptions = {
        from: 'mikolaj.andrzejewski999@gmail.com',
        to,
        subject,
        html:`
            <html>
                <head>
                    <title>${subject}</title>
                </head>
                <body>
                    <h2>Wiadomość z formularza</h2>
                    <p>Wiadomość od użytkownika: ${name}</p>
                    <p>Adres e-mail użytkownika: ${email}</p>
                    <p>Wiadomość: ${text}</p>
                </body>
            </html>
        `,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          res.status(500).send({message: 'Wiadomość nie została wysłana'});
          return
        } else {
          console.log('Email sent: ' + info.response);
          res.send({message: 'Dziękujemy za wysłanie wiadomości'});
          return
        }
    });
});

module.exports = router;
