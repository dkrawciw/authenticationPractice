const express = require('express'),
      app = express(),
      customBasicAuth = require('./routes/customBasicAuth.js');

app.get('/', (req, res) => {
    res.send("Howdy!")
})

app.use('/customBasicAuth', customBasicAuth)

app.listen(8080, () => {
    console.log("Running Authentication App...")
})