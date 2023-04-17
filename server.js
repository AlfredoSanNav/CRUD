const express = require('express');
const bodyParser = require('body-parser');

const app = express()

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 9000);
app.get('/', (req, res) =>{
    res.send('Welcome to my API')
})

app.listen(app.get('port'), () =>{
    console.log('Server running on port', app.get('port'))
})