const express = require('express');
const app = express();

const { mongoose } = require("./db/mongoose");

/**
 * GET / (main page)
 * Purpose: testing if the API works
 */
// Commented out because it wil override the main page ;)
// app.get('/', (req, res) => {
//     res.send("testing");
// })



app.listen(4200, () => {
    console.log("Server is listening on port 4200")
})