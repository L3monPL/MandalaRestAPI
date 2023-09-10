const express = require('express');

const controllerRealization = express.Router();

const getRealizationsList = require('./routes/getRealizationsList')
const postRealization = require('./routes/postRealization')
const postRealizationImage = require('./routes/postRealizationImage')



controllerRealization.use('/', getRealizationsList)
controllerRealization.use('/', postRealization)
controllerRealization.use('/', postRealizationImage)


module.exports = controllerRealization;