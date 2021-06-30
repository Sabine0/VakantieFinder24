const express = require('express');
const app = express();
const { mongoose } = require("./db/mongoose");

const authRoute = require('./routes/auth');
const contendersRoute = require('./routes/contenders');
const usersRoute = require('./routes/users');

// Middleware
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Route middlewares
app.use('/api/', authRoute);
app.use('/api/', usersRoute);
app.use('/api/', contendersRoute);

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
