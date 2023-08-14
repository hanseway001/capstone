const pool = require('../config/database')

class Course {
    // static async createUser(userName, email, password, firstName, lastName, phone, address) {
    //     console.log(email)
    //     const query = {
    //     //   text: 'INSERT INTO users(username, email, hash, isadmin, firstname, lastname, telephone, address) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning *',
    //     //   values: [userName, email, password, 'false', firstName, lastName, phone, address],
    //     }
    //     try {
    //       const { rows } = await pool.query(query)
    //       return rows[0]
    //     } catch (err) {
    //       throw err;
    //     }
    //   }

    // use this to check if a checkbox is checked

    // function validate(){
    //     var remember = document.getElementById('remember');
    //     if (remember.checked){
    //         alert("checked") ;
    //     }else{
    //         alert("You didn't check it! Let me check it for you.")
    //     }
    // }

    static async findCourses() {
        const query = {

            //   text: 'SELECT * FROM course',
            text: `SELECT * FROM course WHERE tuition_cost = '$900.00'`,
            //   text: `SELECT * FROM course WHERE title = 'Introduction to Computer Science'`,
        }
        try {
            const { rows } = await pool.query(query)
            console.log("we are in findcourses")
            return rows
        } catch (err) {
            throw err
        }
    }

    //   static async findCourseByCost(tuition_cost) {
    //     const query = {
    //     //   text: 'SELECT * FROM user WHERE username = $1',
    //     //   values: [userName],
    //     text: 'SELECT * FROM course WHERE tuition_cost = $900.00',
    //       values: [tuition_cost],
    //     }
    //     try {
    //       const { rows } = await pool.query(query)
    //     //   console.log(rows[0])
    //       return rows[0]
    //     } catch (err) {
    //       throw err
    //     }
    //   }
}

module.exports = Course


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

