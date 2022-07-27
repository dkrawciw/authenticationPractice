const express = require('express'),
      router = express.Router();

// Setting up routes for logging in
router.get('/weakAuth/login', (req, res) => {
    res.render('weakAuth/weakAuthLogin.ejs')
})
router.post('/weakAuth/login', (req, res) => {
    res.redirect('/weakAuth/home')
})

// Setting up routes for signing up
router.get('/weakAuth/signup', (req, res) => {
    res.render('weakAuth/weakAuthSignup.ejs')
})
router.post('/weakAuth/signup', (req, res) => {
    res.redirect('/weakAuth/home')
})

// Home page after signing in
router.get('/weakAuth/home', (req, res) => {
    res.render('weakAuth/weakAuthHome.ejs')
})

module.exports = router;