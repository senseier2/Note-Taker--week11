//Importing a new router
const express = require('express');
const router = express.Router();

//Importing notes router
const notes = require('./notes');

//Implement the notes route
router.use(notes);

//exporting the router
module.exports = router;