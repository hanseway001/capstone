// server/server.js
const express = require("express");
const morgan = require('morgan')
const winston = require('winston')
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken")
const token = jwt.sign({foo: 'bar'}, 'shhhh')
const user = require('./models/userModel');
const passport = require('passport')
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

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
app.use(morgan('combined', {
    stream: {
        write: (message) => {
            logger.http(message.trim())
        }
    }
}))
// parse requests of content-type - application/json
// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(passport.initialize())
app.use(cors())

//Routes
app.use('/api', authRoutes)
// app.get('/login', )


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
});

app.get('/', (req,res) => {
    logger.info('home page accesed')
    res.send('hello Morgan!')
})


// app.post('/addUser', (req,res) => {
//     let name = req.body.name
//     let email = req.body.email
//     logger.info(`recieved ${name} ${email}`)
//     res.send(`hello ${name} ${email}`)
// })

// app.post('/register', (req,res) => {
//     let name = req.headers.userName
//     let email = req.body.email
//     logger.info(`recieved ${name} ${email}`)
//     res.send(`hello ${name} ${email}`)
// })

// app.post('/login', (req, res) => {
//     const {username, password } = req.body;
//     const user = user.find
//     // const user = Users.find(currUser =>  currUser.username === username);
//     if(!user || user.password !== password) {
//         return res.status(401).json({ errorMessage: 'Invalid Cridentials'})
//     }

//     const token = jwt.sign({username: user.username}, secret, {
//         algorithms: ['HS256'],
//         expiresIn: '10s'
//     });

//     return res.json({ token: token}); 
// })

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// app.get('/api/getUsers', dbConnection.getUsers)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});