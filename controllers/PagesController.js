const express = require('express');
const api = express.Router();
const morgan = require('morgan')

const controllerUser = require('./ControllerUser/controllerUser')
// const controllerCompany = require('./controllerCompany/controllerCompany')
// const controllerCompanyOffer = require('./controllerCompanyOffer/controllerCompanyOffer')

api.use(morgan('dev'))

api.use('/users', controllerUser)
// api.use('/company', controllerCompany)
// api.use('/companyoffer', controllerCompanyOffer)

module.exports = api;