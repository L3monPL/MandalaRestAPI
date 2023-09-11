const express = require('express');

const controllerRealization = express.Router();

const getRealizationsList = require('./routes/getRealizationsList')
const getRealizationImage = require('./routes/getRealizationImage')

const postRealization = require('./routes/postRealization')
const postRealizationImage = require('./routes/postRealizationImage')

const deleteRealizationImage = require('./routes/deleteRealizationImage')
const deleteRealization = require('./routes/deleteRealization')



controllerRealization.use('/', getRealizationsList)
controllerRealization.use('/', getRealizationImage)

controllerRealization.use('/', postRealization)
controllerRealization.use('/', postRealizationImage)

controllerRealization.use('/', deleteRealizationImage)
controllerRealization.use('/', deleteRealization)



module.exports = controllerRealization;