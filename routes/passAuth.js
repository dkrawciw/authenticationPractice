const express = require('express'),
      router = express.Router();

// Setting up routes for logging in
router.get('/passAuth/login', (req, res) => {
    res.render('passAuth/passAuthLogin.ejs')
})
router.post('/passAuth/login', (req, res) => {
    res.redirect('/passAuth/home')
})

// Setting up routes for signing up
router.get('/passAuth/signup', (req, res) => {
    res.render('passAuth/passAuthSignup.ejs')
})
router.post('/passAuth/signup', (req, res) => {
    res.redirect('/passAuth/home')
})

// Home page after signing in
router.get('/passAuth/home', (req, res) => {
    res.render('passAuth/passAuthHome.ejs')
})

module.exports = router;