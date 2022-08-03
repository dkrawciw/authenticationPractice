const express = require('express');
const router = express.Router();

// Passport relavant constants
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');


router.get('/googleAuth/login', (req, res) => {
    res.render('googleAuth/googleAuthLogin.ejs')
})

router.get('/googleAuth/home', (req, res) => {
    res.render('googleAuth/googleAuthHome.ejs')
})

module.exports = router;