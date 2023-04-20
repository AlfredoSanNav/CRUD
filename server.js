const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express()
app.use(cors())
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set('port', process.env.PORT || 3000);

app.use('/api', apiRouter)

app.listen(app.get('port'), () =>{
    console.log('Server running on port', app.get('port'))
})
