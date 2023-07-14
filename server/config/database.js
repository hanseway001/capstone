const { Pool } = require('pg');
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL
// });

// pool.connect();
const getUsers = (req, res) => {
    pool.query('SELECT * from user limit 5', (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row))
        }
        res.status(200).json(results.rows)
    })
}
module.exports = {getUsers}