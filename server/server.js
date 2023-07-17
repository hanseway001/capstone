// server/server.js
const express = require("express");
const morgan = require('morgan')
const winston = require('winston')
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken")
const token = jwt.sign({foo: 'bar'}, 'shhhh')
const dbConnection = require('./config/database.js');

//winston for general logging
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logfile.log'})
    ]
})

//Morgan logging http request and stream into winston
app.use(morgan('dev', {
    stream: {
        write: (message) => {
            logger.http(message.trim())
        }
    }
}))
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => {
    logger.info('home page accesed')
    res.send('hello Morgan!')
})

app.post('/addUser', (req,res) => {
    let name = req.body.name
    let email = req.body.email
    logger.info(`recieved ${name} ${email}`)
    res.send(`hello ${name} ${email}`)
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/getUsers', dbConnection.getUsers)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});