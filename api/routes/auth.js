const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../db/models/user.model");
// const verify = require('verifyToken');
const { registerValidation, loginValidation } = require('../validation');

const secret = "jhgfdsjhy23334ui7yfr378ferbjhefdjh";

router.post('/register', async (req, res) =>{
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    // HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.wachtwoord, salt).catch((e) => {
        console.log("Something went wrong");
    })

    const user = new User({
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: hashedPassword
    });
    try{
        await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check if the email exists
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send('Email is not found');

    // Check if password is correct
        const validPass = await bcrypt.compare(req.body.wachtwoord, user.wachtwoord);
        if(!validPass) return res.status(400).send("Invalid password");


    // CREATE JWT
    const token = jwt.sign({
        _id: user._id
    }, secret);

    res.header('token', token).send(token);
});

module.exports = router;
