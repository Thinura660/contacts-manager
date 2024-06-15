const express = require("express");
const dotenv = require("dotenv").config();
const {getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController")

const Router = express.Router();

Router.route("/").get(getContacts).post(createContact);
Router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = Router;