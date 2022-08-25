//Importing the router
const router = require('express').Router();
//Initializing the db call and adding to the notes variable.
const {notes} = require('../../db/db.json'); //Found some information on sharing a db between node and express as an object here: https://itnext.io/how-to-share-a-single-database-connection-in-a-node-js-express-js-app-fcad4cbcb1e

//Create new notes
const {
     noteCreateNew
} = require('../../lib/noteFunc');

//saving notes history to json db
router.get('/notes', (req, res) => {
    let stored = notes
    res.json(stored);
})

//Client sent notes 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = noteCreateNew(req.body, notes);
    res.json(note);
})


//exporting the routes
module.exports = router;