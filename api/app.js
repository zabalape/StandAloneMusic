require('dotenv').config()
const ENGINE_DB = process.env.ENGINE_DB
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./config/mongo');
const {dbConnectPg} = require('./config/postgres')
const indexRoute = require('./routes/index')
const morganBody = require('morgan-body')
const loggerStream = require('./utils/handleLogger')

app.use(express.static('storage'))
app.use(express.json());


morganBody(app,{
    noColors: true,
    stream: loggerStream,
    logRequestBody: false,
    logResponseBody: false,
})
app.use('/api', indexRoute)
app.use(cors());
(ENGINE_DB === 'nosql') ? dbConnect() : dbConnectPg();
const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})