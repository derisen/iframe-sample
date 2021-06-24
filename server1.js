const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 3001;

// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders.
app.use(express.static('app1'));

// Set up a route for index.html
app.get('/ssout', (req, res) => {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/app1/ssout.html'));
});

// Set up a route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/app1/index.html'));
});

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);
