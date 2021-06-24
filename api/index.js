const express = require('express');
const app = express();
const { mongoose } = require("./db/mongoose");

const authRoute = require('./routes/auth');

// Load in the mongoose model
// const { Contender } = require("./db/models");

// Middleware
app.use(express.json());

// Route middlewares
// USER ROUTES
app.use('/api/user', authRoute);

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

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
