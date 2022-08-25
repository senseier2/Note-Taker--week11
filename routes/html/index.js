//Importing path
const path = require('path');
//importing the router - https://www.geeksforgeeks.org/express-js-express-router-function/
const router = require('express').Router();

//route to the notes html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;

