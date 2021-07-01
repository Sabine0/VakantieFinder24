const router = require('express').Router();
const User = require('../db/models/user.model');
const bcrypt = require('bcryptjs');
// const { registerValidation } = require('../validation');

/**
 * GET /user/:userId
 * Purpose: get all information about specified user
 */
router.get('/user/:userId',  (req, res) => {
    User.findOne({
        _id: req.params.userId
    }).then((user)=>{
        res.send(user);
    })
})

/**
 * GET /user/:email
 * Purpose: get all information about specified user
 */
router.get('/user/email/:email', (req, res) =>{
    User.findOne({
        email: req.params.email
    }).then((user)=>{
        res.send(user);
    })
})

/**
 * PATCH /user/:userId
 * Purpose: update user info
 */
// maybe add later
router.patch('/user/:userId', async (req, res) => {
    try {
        const _id = req.params.userId;

        const options = { new: true }
        // HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        req.body.wachtwoord = await bcrypt.hash(req.body.wachtwoord, salt).catch((e) => {
            res.status(400).send(e);
        })
        const updates = req.body;
        const result = await User.findByIdAndUpdate(_id, updates, options);
        res.send(result)

    } catch(err){
        res.status(400).send(err);
    }

})

module.exports = router;

