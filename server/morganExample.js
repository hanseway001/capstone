const express = require('express')
const morgan = require('morgan')
const winston = require('winston')
const port = process.env.PORT || 3000

const app = express()

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

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})