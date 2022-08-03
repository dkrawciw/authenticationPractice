const express = require('express');
const router = express.Router();

router.get('/smsAuth/login', (req, res) => {
    res.render('smsAuth/smsAuthLogin.ejs')
})
router.post('/smsAuth/login', (req, res) => {
    console.log('Phone Num: ', req.body.phoneNum)
    res.redirect('/smsAuth/verification')
})

router.get('/smsAuth/verification', (req, res) => {
    res.render('smsAuth/smsAuthVerification.ejs')
})
router.post('/smsAuth/verification', (req, res) => {
    res.redirect('/smsAuth/home')
})

router.get('/smsAuth/home', (req, res) => {
    res.render('smsAuth/smsAuthHome.ejs')
})

module.exports = router;