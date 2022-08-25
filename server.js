const PORT process.env.port || 3001;

//Importing expressjs - install express
const express = require("express");

//passing express to the app variable
const app = express();

//Import fs and path as well
const fs = require('fs');
const path = require('path');

//Setting up folders for route files and importing
const apiRoutes = require('./routes/api');
const htmlRouts = require('./routes/html');

//handle URL encoding with middleware
app.use(express.urlencoded({extended: true}));
//handle URL json using express
app.use(express.json());

//Setting up static files for use of the public folder
app.use(express.static('public'));

//connecting the routes to express
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
    //console information
    console.log(`Listening for requests on port ${PORT}! 🏎️`)
})




