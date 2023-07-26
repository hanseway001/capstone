// import { Link } from "react-router-dom"
import React, { useState } from 'react'
import axios from 'axios'

<<<<<<< HEAD
export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
      // console.log(username + 'is username')
    } else if (name === 'password') {
      setPassword(value);
      // console.log(username + 'is password')
    }
  };
=======
export const styles = {
//   link: {
//     // color: "teal",
//     // cursor: "pointer"
//   }
};

export default function Login() {
  return (
    <div className="App">
      <header>
        <div class="row, center">
          <img src="src/images/iconL.png" alt="" />
          <h1 class="white">CAPSTONE</h1>
        </div>
        <h2 class="center">COURSE MANAGEMENT MADE EASY</h2>

        <div className="linkContainer">
          <Link style={styles.link} to={'/Courses'}>
            Courses
          </Link>
          <Link style={styles.link} to={'/Registration'}>
            Registration
          </Link>
          <Link style={styles.link} to={'/About'}>
            About
          </Link>
        </div>
      </header>
>>>>>>> data

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(username + password)
      const response = await axios.post('http://localhost:3001/api/login', { userName: username, password: password },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      );
      console.log(response.data); // Assuming the server returns some response data
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };


return (
  <div>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit}>
      <div>
<<<<<<< HEAD
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onInput={handleInputChange}
          required
        />
=======
        <main class="loginMain">
          {/* <img src="images/logo.png"  alt="" /> */}
          <h1 class="center">LOGIN</h1>

          <div class="center">
            <div class="column">
              <h2>student login</h2>
              <input id="loginUsername" type="text" placeholder="username"/>
              <input id="loginPassword" type="text" placeholder="password"/>
              <input class="button" type="submit"/>
            </div>
            <div class="column">
              <h2>admin login</h2>
              <input id="loginUsername" type="text" placeholder="username"/>
              <input id="loginPassword" type="text" placeholder="password"/>
              <input class="whiteButton" type="submit"/>
            </div>
          </div>

        </main>

        <main class="loginMain2">
          <img src="images/logo.png"  alt="" />
          <h1 class="center">ADMIN LOGIN</h1>
          <div class="center">
            
            <div class="column">
              <h2>admin login</h2>
              <input id="loginUsername" type="text" placeholder="username"/>
              <input id="loginPassword" type="text" placeholder="password"/>
              <input class="whiteButton" type="submit"/>
            </div>
          </div>
        </main>

        {/* <main class="loginMain2">
          <img src="images/logo.png"  alt="" />
          <h1 class="center">ADMIN LOGIN</h1>
          <div class="center">
            <div class="column">
              <h2>student login</h2>
              <input id="loginUsername" type="text" placeholder="username"/>
              <input id="loginPassword" type="text" placeholder="password"/>
              <input class="button" type="submit"/>
            </div>
            <div class="column">
              <h2>admin login</h2>
              <input id="loginUsername" type="text" placeholder="username"/>
              <input id="loginPassword" type="text" placeholder="password"/>
              <input class="whiteButton" type="submit"/>
            </div>
          </div>
        </main> */}

>>>>>>> data
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onInput={handleInputChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);
}


// export const styles = {
//   link: {
//     color: "teal",
//     cursor: "pointer"
//   }
// };


// export default function Login() {
//   return (
//     <div className="App">
//       <img src="images/logo.png"  alt="" />
//       <h1>LOGIN</h1>
//       <h4>Pages:</h4>
//       <Link style={styles.link} to={'/Courses'}>
//         Courses
//       </Link>
//       <Link style={styles.link} to={'/Registration'}>
//         Registration
//       </Link>
//       <Link style={styles.link} to={'/About'}>
//         About
//       </Link>

//       <form action="/login" method="post">
//         <input type="text" name="username" id="username" placeholder="Enter your username." required />
//         <input type="password" name="password" id="password" placeholder="Enter your password." required/>
//         <button onclick="../server/api/login">Login</button>
//       </form>
//       <p>
//         To register click 
//         <Link style={styles.link} to={'../api/login'}> here</Link>
//       </p>
//     </div>
//   );
// }