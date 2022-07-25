const express = require('express'),
      app = express(),
      customBasicAuth = require('./routes/customBasicAuth.js');

app.set('view engine', 'ejs');
app.use( express.static('public') );

// Landing Page
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// Including Routes
app.use('/customBasicAuth', customBasicAuth)

// Define the port to listen on
app.listen(8080, () => {
    console.log("Running Authentication App...")
})