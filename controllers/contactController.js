const getDb = require("../utils/database").getDb;
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getIndex = (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from('<h1>HOME</h1>'));
}

exports.getCreateContact = (req, res) => {
    res.render('create-contact', { pageTitle: "Create Contact" });
}

exports.postCreateContact = (req, res) => {
    const db = getDb();
    const { name, email, password } = req.body;
    const contactsCollection = db.collection("users");

    const userPassword = req.body.password;
    let hashedPassword = bcrypt.hashSync(userPassword, 10);

    try {
        const result = contactsCollection.insertOne({ name, email, hashedPassword });
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).send("failed to create contact")
    }

    res.redirect('/');
}