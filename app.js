const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

// Pieces necessary to run the server on https
const fs = require('fs');
const http = require('http');
const https = require('https');

// Connected JS pages
const passAuth = require('./routes/passAuth.js');
const smsAuth = require('./routes/smsAuth.js');
const googleAuth = require('./routes/googleAuth.js');

// Port values
const HTTP_PORT = 8080;
const HTTPS_PORT = 8181;

// Getting the options for the landing page from a json file
let authOptions;
try{
    const authOptionsFile = fs.readFileSync('./public/authOptions.json')
    authOptions = JSON.parse(authOptionsFile)

} catch(err){
    console.log('Options JSON file not read correctly!')
    authOptions = []
}

// Important middlewares
app.set('view engine', 'ejs');
app.use( express.static('public') );
app.use(bodyParser.urlencoded({ extended: false }))


// Landing Page
app.get('/', (req, res) => {
    res.render('index.ejs', {options: authOptions})
})

// Including Routes
app.use(passAuth)
app.use(smsAuth)
app.use(googleAuth)

// Default Loading page
app.get('/*', (req, res) => {
    res.render('defaultPage.ejs')
})

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
https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    }, app).listen(HTTPS_PORT, () => {
    console.log('HTTPS app running on port: ' + HTTPS_PORT)
})