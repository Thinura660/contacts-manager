const express = require("express");
const dotenv = require("dotenv").config();
const Router = express.Router();

const contactController = require('../controllers/contactController');

Router.get('/', contactController.getIndex);
Router.get('/contacts/create', contactController.getCreateContact);
Router.post('/contacts/create', contactController.postCreateContact);

module.exports = Router;