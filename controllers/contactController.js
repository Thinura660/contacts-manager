//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
};

//@desc Get all contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("OUTPUT: ", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("ALL FIELDS ARE REQUIRED")
    }
    res.status(200).json({ message: "Create Contact" })
};

//@desc Get all contacts
//@route GET /api/contacts/id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}"` })
};

//@desc Get all contacts
//@route GET /api/contacts/id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}"` })
};

//@desc Get all contacts
//@route GET /api/contacts/id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}"` })
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };