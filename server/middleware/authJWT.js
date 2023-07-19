const jwt = require("jsonwebtoken")
const config = require("../config/authConf")
const db = require("../config/database")

verifyToken = (req,res, next) => {
    let token = req.headers[x-access]
    jwt.verify()
}