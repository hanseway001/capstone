import { Link } from "react-router-dom"
import React, { useState } from 'react'
import Navbar from "../components/Navbar";

import axios from 'axios'

export const styles = {
  // link: {
    // color: "teal",
    // cursor: "pointer"
  // }
};

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
  <div className="App">
    <Navbar />
    
    <div>
      <main className="loginMain">
        <h1 className='center'>Login</h1>
        <form className="loginModel center column" onSubmit={handleSubmit}>
          <div className="">
            <label className="black" htmlFor="username">Username:</label>
            <input className="LoginInputBox"
              type="text"
              id="LoginUsername"
              name="username"
              value={username}
              onInput={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="black" htmlFor="password">Password:</label>
            <input className="LoginInputBox"
              type="password"
              id="loginPassword"
              name="password"
              value={password}
              onInput={handleInputChange}
              required
            />
          </div>
          <button className="LoginSubmitButton" type="submit">Submit</button>
        </form>
      </main>
    </div>
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