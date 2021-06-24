const express = require('express');
const app = express();

const { mongoose } = require("./db/mongoose");

// Load in the mongoose model
const { User, Contender } = require("./db/models");

app.use(express.json());


// Calls for users
/**
 * POST /user
 * Purpose: add a user
 */
app.post('/user', (req, res) => {
    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(()=>{
        res.send(newUser);
    }).catch((e)=> {
        res.status(400).send(e);
    })
})


/**
 * GET /user
 * Purpose: get all users
 */
app.get('/user', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    })
})

/**
 * GET /user/:id
 * Purpose: get specific
 */
app.get('/user/:userid', (req, res) => {
    User.find({
        _id: req.params.userid
    }).then((user)=>{
        res.send(user);
    })
})


// Calls for contenders
/**
 * POST /contender
 * Purpose: add a contender
 */
app.post('/contender', async (req, res) => {
        let newContender = new Contender({
            plaatsnaam: req.body.plaatsnaam,
            fotos: req.body.fotos
        });
        newContender.save().then((contender) => {
            res.send(contender);
        }).catch((e) => {
            res.send(e);
        })
})

/**
 * GET /contender
 * Purpose: get all contenders
 */
app.get('/contender', (req, res) => {
    Contender.find({}).then((contenders) => {
        res.send(contenders);
    })
})

/**
 * GET /contender/:plaatsnaam
 * Purpose: get contender with specified plaatsnaam
 */
app.get('/contender/:plaatsnaam', (req, res) =>{
    Contender.findOne({
        plaatsnaam: req.params.plaatsnaam
    }).then((contender)=>{
        res.send(contender);
    })
})

/**
 * GET /contender/:interesses
 * Purpose: get contender with specified interesses
 */
app.get('/contender/:interesses', (req, res) =>{
    Contender.find({
        // interesses: ["strand", "zon"] // example
    })
})
    
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})