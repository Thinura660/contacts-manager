const express = require("express");
const dotenv = require("dotenv").config();
const mongodb = require('mongodb');
const path = require('path');
const bodyParser = require('body-parser');
// Importing Routes
const contactRoutes = require("./routes/contactRoutes");

// Importing Database
const { mongoConnect, getDb } = require('./utils/database');

// Express.js integration
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

// Set EJS as view engine
app.set('view engine', 'ejs');
// Set Views folder
app.set('views', path.join(__dirname, 'views'));

// Mounting routes
app.use('/', contactRoutes);


mongoConnect( ()=> {
    const db = getDb();
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running on port ", port)
})
