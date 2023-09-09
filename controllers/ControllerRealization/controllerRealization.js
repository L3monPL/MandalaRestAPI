const express = require('express');

const controllerRealization = express.Router();

const getRealizationsList = require('./routes/getRealizationsList')
const postRealization = require('./routes/postRealization')



controllerRealization.use('/', getRealizationsList)
controllerRealization.use('/', postRealization)


module.exports = controllerRealization;