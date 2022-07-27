const express = require('express'),
      router = express.Router();

// Setting up routes for logging in
router.get('/weakAuth/login', (req, res) => {
    res.render('weakAuthLogin.ejs')
})
router.post('/weakAuth/login', (req, res) => {
    console.log('Logged in, Hype!')
    res.redirect('/')
})

// Setting up routes for signing up
router.get('/weakAuth/signup', (req, res) => {
    res.render('weakAuthSignup.ejs')
})
router.post('/weakAuth/signup', (req, res) => {
    console.log('Signed Up, Hype!')
    res.redirect('/')
})

module.exports = router;