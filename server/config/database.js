const { Pool } = require('pg');
const pool = new Pool({
    // connectionString: process.env.DATABASE_URL
    connectionString: process.env.DB_URL
});
// console.log("hello" + process.env.DATABASE_URL)
pool.connect();
const getUsers = (req, res) => {
    pool.query('SELECT * from users', (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row))
        }
        res.status(200).json(results.rows)
    })
}
const adduser = (req,res) => {
    pool.query(`insert into users 
	    (username, email, isadmin, firstname, lastname, telephone, address) 
	    values 
	    (${req.userName}, ${req.email}, ${req.isAdmin}, ${req.firstName}, ${req.lastName}, ${req.phone}, ${req.address});`, (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row))
        }
        res.status(200).json(results.rows)
    })
}
module.exports = {getUsers, adduser}