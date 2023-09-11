const express = require('express');

const controllerRealization = express.Router();

const getRealizationsList = require('./routes/getRealizationsList')
const getRealizationImage = require('./routes/getRealizationImage')

const postRealization = require('./routes/postRealization')
const postRealizationImage = require('./routes/postRealizationImage')

const deleteRealizationImage = require('./routes/deleteRealizationImage')



controllerRealization.use('/', getRealizationsList)
controllerRealization.use('/', getRealizationImage)

controllerRealization.use('/', postRealization)
controllerRealization.use('/', postRealizationImage)

controllerRealization.use('/', deleteRealizationImage)



module.exports = controllerRealization;