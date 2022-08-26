//Importing a new router
const express = require('express');
const rouuter = express.Router();

const router = require('../html');
//Importing notes router
const notes = require('./notes');

//Implement the notes route
router.use(notes);

//exporting the router
module.exports = router;