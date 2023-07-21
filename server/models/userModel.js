const pool = require('../config/database')

class User {
    static async createUser(userName, email, password, firstName, lastName, phone, address) {
        console.log(email)
        const query = {
          text: 'INSERT INTO users(username, email, hash, isadmin, firstname, lastname, telephone, address) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning *',
          values: [userName, email, password, 'false', firstName, lastName, phone, address],
        }
        try {
          const { rows } = await pool.query(query)
          return rows[0]
        } catch (err) {
          throw err;
        }
      }
    
      static async findUserByUserName(userName) {
        const query = {
          text: 'SELECT * FROM users WHERE username = $1',
          values: [userName],
        }
        try {
          const { rows } = await pool.query(query)
        //   console.log(rows[0])
          return rows[0]
        } catch (err) {
          throw err
        }
      }
}

module.exports = User


// const createUser = (req,res) => {
//     // console.log(req.username + 'userName' + req.uesrName)
//     // insert into users (userName, hash) values (${req.body.userName}, ${req.body.password});`,
//     pool.query(`
//         insert into users 
//         (userName, email, hash, isAdmin, firstName, lastName, telephone, address) 
//         values 
//         (${req.body.userName}, ${req.body.email}, ${req.body.password}, 'false', ${req.firstName}, ${req.lastName}, ${req.phone}, ${req.address});`, 
//         (err, results) => {
//             if (err) throw err;
//             for (let row of results.rows) {
//                 console.log(JSON.stringify(row))
//         }
//         res.status(200).json(results.rows)
//     })
// }

// const findUserByUsername = (req,res) => {
//     pool.query(`select * from users where userName = $1
//     values
//     (${req.userName});`,
//     (err, results) => {
//         if (err) throw err;
//         for (let row of results.rows) {
//          console.log(JSON.stringify(row))
//         }
//         res.status(200).json(results.rows)
//     })
// }
// module.exports = { createUser, findUserByUsername}

