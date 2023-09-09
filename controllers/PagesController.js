const express = require('express');
const api = express.Router();
const morgan = require('morgan')

const controllerUser = require('./ControllerUser/controllerUser')
const controllerRealization = require('./ControllerRealization/controllerRealization')
// const controllerCompanyOffer = require('./controllerCompanyOffer/controllerCompanyOffer')

api.use(morgan('dev'))

api.use('/users', controllerUser)
api.use('/realizations', controllerRealization)
// api.use('/companyoffer', controllerCompanyOffer)

module.exports = api;