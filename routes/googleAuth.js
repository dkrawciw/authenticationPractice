const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      GoogleStrategy = require('passport-google-oidc');

// Setting the google google strategy
/*
passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: '/googleAuth/home'
}, (accessToken, refreshToken, profile, cb) => {
    console.log('yuh')
}

))
*/

router.get('/googleAuth/login', (req, res) => {
    res.render('googleAuth/googleAuthLogin.ejs')
})

/*
router.get('/googleAuth/login/google', passport.authenticate('google', {
    successRedirect: '/googleAuth/home',
    failureRedirect: '/googleAuth/login'
}))
*/

router.get('/googleAuth/home', (req, res) => {
    res.render('googleAuth/googleAuthHome.ejs')
})

module.exports = router;