const express = require('express');
const app = express();
const { mongoose } = require("./db/mongoose");

const authRoute = require('./routes/auth');
const contendersRoute = require('./routes/contenders');

// Load in the mongoose model
// const { Contender } = require("./db/models");

// Middleware
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
});

// Route middlewares
// USER ROUTES
app.use('/api/user', authRoute);
app.use('/api/contender', contendersRoute);



app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
