const express = require('express');

const controllerMessage = express.Router();

// const getRealizationsList = require('./routes/getRealizationsList')
// const getRealizationImage = require('./routes/getRealizationImage')

const postMail = require('./routes/postMail')
// const postRealizationImage = require('./routes/postRealizationImage')

// const deleteRealizationImage = require('./routes/deleteRealizationImage')




// controllerRealization.use('/', getRealizationsList)
// controllerRealization.use('/', getRealizationImage)

controllerMessage.use('/', postMail)
// controllerRealization.use('/private/', postRealizationImage)

// controllerRealization.use('/private/', deleteRealizationImage)




module.exports = controllerMessage;