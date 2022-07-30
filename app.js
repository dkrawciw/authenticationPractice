const express = require('express'),
      app = express(),
      passAuth = require('./routes/passAuth.js');

// Placeholder
let options = [
    {
        name: 'Password Authentication',
        route: '/passAuth'
    },
    {
        name: 'Hashed Authentication',
        route: '/hashedAuth'
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

// Define the port to listen on
app.listen(8080, () => {
    console.log("Running Authentication App...")
})