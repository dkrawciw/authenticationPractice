const express = require('express'),
      app = express();

// Pieces necessary to run the server on https
const fs = require('fs'),
      http = require('http'),
      https = require('https');

// Connected JS pages
const passAuth = require('./routes/passAuth.js'),
      smsAuth = require('./routes/smsAuth.js');

// Port values
const HTTP_PORT = 8080,
      HTTPS_PORT = 8181;



// Placeholder options
// NOTE: Should probably find a better way to get and send this information
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
/*
app.listen(8080, () => {
    console.log('Running Authentication App...')
})
*/

// running the server with http
http.createServer(app)
.listen(HTTP_PORT, () => {
    console.log('HTTP app running on port: ' + HTTP_PORT)
})

// Running the server with https
/* 
Certificates generated with command:
    openssl req -nodes -new -x509 -keyout server.key -out server.cert
*/

https
.createServer(
    {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    }, app)
.listen(HTTPS_PORT, () => {
    console.log('HTTPS app running on port: ' + HTTPS_PORT)
})