import { Link } from "react-router-dom";
import React, { useState } from 'react'
import Navbar from "../components/Navbar";

import axios from 'axios'

export const styles = {
  // link: {
    // color: "teal",
    // cursor: "pointer"
  // }
};

export default function Registration() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'address') {
      setAddress(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(username + password)
      const response = await axios.post('http://localhost:3001/api/register', 
      { userName: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address 
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      );
      // console.log(response.data); // Assuming the server returns some response data
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div className="App">
      <Navbar />

    <div>
      <main className="loginMain">
        {/* <img src="images/logo.png"  alt="" /> */}
        <h1 className="center">Sign Up</h1>
        <form className="loginModel center column" onSubmit={handleSubmit}>
          <div className=" column center">

            <div className="TextLeft">
              <label className="black" htmlFor="username">Username:</label>
              <input className="regInputBox"
                type="text"
                id="username"
                name="username"
                value={username}
                onInput={handleInputChange}
                required
              />
            </div>

            <div className="TextLeft">
              <label className="black" htmlFor="email">Email:</label>
              <input className="regInputBox"
                type="text"
                id="email"
                name="email" 
                value={email} 
                onInput={handleInputChange}
                required/>
            </div>

            <div className="TextLeft">
              <label className="black" htmlFor="password">Password:</label>
              <input className="regInputBox"
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onInput={handleInputChange}
                required
              />
            </div>
            <div className="TextLeft">
              <label className="black" htmlFor="firstName">First Name:</label>
              <input className="regInputBox"
                type="text" 
                id="firstName" 
                name="firstName" 
                value={firstName} 
                onInput={handleInputChange}
                required
              />
            </div>

            <div className="TextLeft">
              <label className="black" htmlFor="lastName">Last Name:</label>
              <input className="regInputBox"
                type="text" 
                id="lastName" 
                name="lastName" 
                value={lastName} 
                onInput={handleInputChange}
                required
              />
            </div>

            <div className="TextLeft">
              <label className="black" htmlFor="phone">Phone:</label>
              <input className="regInputBox"
                type="text" 
                id="phone"
                name="phone" 
                value={phone} 
                onInput={handleInputChange}
                required
              />
            </div>

            <div className="TextLeft">
              <label className="black" htmlFor="address">Address:</label>
              <input className="regInputBox"
                type="text" 
                id="address" 
                name="address" 
                value={address} 
                onInput={handleInputChange}
                required
              />
            </div>
            
            <input className="LoginSubmitButton" type="submit"/>

          </div>
        </form>
      </main>


    </div>
  </div>
);
}