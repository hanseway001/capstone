// module.exports = (sequelize, Sequelize) => {
//     const User = sequelize.define("users", {
//       username: {
//         type: Sequelize.STRING
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       password: {
//         type: Sequelize.STRING
//       }
//     });
  
//     return User;
//   };

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
module.exports = { adduser}