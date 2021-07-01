const router = require('express').Router();
const Contender = require('../db/models/contender.model');

/**
 * GET /contender
 * Purpose: get all contenders
 */
router.get('/contenders', (req, res) => {
    Contender.find({}).then((contenders) => {
        res.send(contenders);
    })
})

/**
 * POST /contenders
 * Purpose: add a contender
 */
router.post('/contenders', async (req, res) => {
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
 * GET contenders/:plaatsnaam
 * Purpose: get contender with specified plaatsnaam
 */
router.get('/contenders/:plaatsnaam', (req, res) =>{
    Contender.findOne({
        plaatsnaam: req.params.plaatsnaam
    }).then((contender)=>{
        res.send(contender);
    })
})

module.exports = router;

