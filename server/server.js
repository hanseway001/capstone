// server/server.js
const express = require("express");
const morgan = require('morgan')
const winston = require('winston')
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken")
const user = require('./models/userModel');
const passport = require('passport')
const authRoutes = require('./routes/authRoutes')
const courseRoutes = require('./routes/courseRoutes')
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const login = require('connect-ensure-login')
const authMiddleware = require('./middleware/authMiddleware')
const auth = require('./controllers/authCont')

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
//Protected Routes
app.use('/api', auth, courseRoutes)
app.use('/api', auth, userRoutes)
// app.use('/api/admin', auth, adminRoutes)

// app.get('/middleware', authMiddleware, (req, res) => {
//     res.body({message: 'Protected route accessed', user: req.user })
// })


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
});

app.get('/', (req,res) => {
    logger.info('home page accesed')
    res.send('hello Morgan!')
})

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