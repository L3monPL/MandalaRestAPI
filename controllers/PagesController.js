const express = require('express');
const api = express.Router();
const morgan = require('morgan')

const controllerUser = require('./ControllerUser/controllerUser')
const controllerRealization = require('./ControllerRealization/controllerRealization')
const controllerMessage = require('./ControllerMessage/controllerMessage')

api.use(morgan('dev'))

api.use('/users', controllerUser)
api.use('/realizations', controllerRealization)
api.use('/message', controllerMessage)
// api.use('/companyoffer', controllerCompanyOffer)

module.exports = api;