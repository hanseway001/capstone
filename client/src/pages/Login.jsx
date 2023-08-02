import { Link, useNavigate  } from "react-router-dom"
import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import decode from "jwt-decode"
import axios from 'axios'


export const styles = {
  // link: {
    // color: "teal",
    // cursor: "pointer"
    // }
  };
  
  export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/api/login', { userName: username, password: password },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
      );
      // console.log(response.data); // Assuming the server returns some response data
      let token = response.data
      localStorage.setItem("jwtToken", token.token)
      if(token){
        // console.log('inside' ,token.token)
        try{
          const decodeToken = decode(token.token);
          if (decodeToken.isAdmin) {
            console.log('You are an admin')
            navigate('/admin' )
          } else {
            console.log('routing to student page')
            navigate('/student')
          }
        }
        catch (error) {
          console.log('error', error)
        }
      }
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

