const router = require('express').Router();
const User = require('../db/models/user.model');
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
 * PATCH /user/:userId
 * Purpose: update user info
 */
// maybe add later
// router.patch('/user/:userId', (req, res) => {
//     User.findOneAndUpdate({
//
//     })
// })

module.exports = router;

