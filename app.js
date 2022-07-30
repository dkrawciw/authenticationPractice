const express = require('express'),
      app = express();

// Connected JS pages
const passAuth = require('./routes/passAuth.js'),
      smsAuth = require('./routes/smsAuth.js');

// Placeholder
let options = [
    {
        name: 'Password Authentication',
        route: '/passAuth/login'
    },
    {
        name: 'SMS Authentication',
        route: '/smsAuth/login'
    },
    {
        name: 'Hashed and Salted Authentication',
        route: '/hashedAndSaltedAuth'
    },
    {
        name: 'OAuth',
        route: '/oauth'
    }
]

app.set('view engine', 'ejs');
app.use( express.static('public') );

// Landing Page
app.get('/', (req, res) => {
    res.render('index.ejs', {options: options})
})

// Including Routes
app.use(passAuth)
app.use(smsAuth)

// Default Loading page
app.get('/*', (req, res) => {
    res.render("defaultPage.ejs")
})

// Define the port to listen on
app.listen(8080, () => {
    console.log("Running Authentication App...")
})