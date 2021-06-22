const express = require('express');
const app = express();

const { mongoose } = require("./db/mongoose");

// Load in the mongoose model
const { User } = require("./db/models");

/**
 * GET / (main page)
 * Purpose: testing if the API works
 */
app.get('/users', (req, res) => {
    res.send("testing");
})

// MORE CALLS GO HERE

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})