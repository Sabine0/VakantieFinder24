const router = require('express').Router();
const Contender = require('../db/models/contender.model');

/**
 * GET /contender
 * Purpose: get all contenders
 */
router.get('/all', (req, res) => {
    Contender.find({}).then((contenders) => {
        res.send(contenders);
    })
})

/**
 * POST /all
 * Purpose: add a contender
 */
router.post('/all', async (req, res) => {
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
 * GET /:plaatsnaam
 * Purpose: get contender with specified plaatsnaam
 */
router.get('/:plaatsnaam', (req, res) =>{
    Contender.findOne({
        plaatsnaam: req.params.plaatsnaam
    }).then((contender)=>{
        res.send(contender);
    })
})

module.exports = router;

