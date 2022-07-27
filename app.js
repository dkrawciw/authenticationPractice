const express = require('express'),
      app = express(),
      weakAuth = require('./routes/weakAuth.js');

// Placeholder
let options = [
    {
        name: 'Weak Authentication',
        route: '/weakAuth'
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
app.use(weakAuth)

// Define the port to listen on
app.listen(8080, () => {
    console.log("Running Authentication App...")
})