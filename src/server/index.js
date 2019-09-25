const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express')
const aylien = require("aylien_textapi");

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {

    textapi.sentiment({
        'url': req.query.url
    }, function (error, response) {
        if (error === null) {
            console.log('response', response);
            res.send(response);
        }
    });

});
