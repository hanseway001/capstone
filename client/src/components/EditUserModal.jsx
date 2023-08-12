import React from "react";
import { useState, useEffect } from "react";
import "./EditUserModal.css"
import axios from 'axios'
// import { updateUserByID } from "../../../server/models/userModel";
// const User = require('../models/userModel');


export const EditUserModal = () => {
    const [serverData, setServerData] = useState({});
    // const [userID, setUserId] = useState()
    // const [userName, setUserName] = useState('')
    // const [email, setEmail] = useState('')
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [address, setAddress] = useState('')
    // const [editModalOpen, setEditModalOpen] = useState(false)


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'userName') {
            setServerData(prevState => {
                let newUserName = {username: value}
                let copyServerData = Object.assign({}, serverData, newUserName)
                // console.log(copyServerData)
                return  copyServerData                           
            })
        } else if (name === 'email') {
            setServerData(prevState => { 
                let newEmail = {email: value}
                let copyServerData = Object.assign({}, serverData, newEmail);  // creating copy of state variable jasper
                // newServerData.email = value; 
                // console.log('this  is serverdata ', serverData)                    // update the name property, assign a new value                 
                return  copyServerData                                 // return new object jasper object
            });
        } else if (name === 'firstName') {
            setServerData(prevState => { 
                let newFirstName = {firstname: value}
                let copyServerData = Object.assign({}, serverData, newFirstName)
                // console.log(copyServerData)
                return  copyServerData 
            });
        } else if (name === 'lastName') {
            setServerData(prevState => { 
                let newLastName = {lastname: value}
                let copyServerData = Object.assign({}, serverData, newLastName)
                // console.log(copyServerData)
                return  copyServerData                       
            });
        } else if (name === 'phone') {
            setServerData(prevState => { 
                let newPhone = {telephone: value}
                let copyServerData = Object.assign({}, serverData, newPhone)
                // console.log(copyServerData)
                return  copyServerData 
            });
        } else if (name === 'address') {
            setServerData(prevState => { 
                let newAddress = {address: value}
                let copyServerData = Object.assign({}, serverData, newAddress)
                // console.log(copyServerData)
                return  copyServerData 
            });
        }
      };


      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('updated user info ', serverData)
        try {
          const response = await axios.post('http://localhost:3001/api/editUserInfo', { serverData },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            }
          );
          // console.log(response.data); // Assuming the server returns some response data
          let token = response.data
          localStorage.setItem("jwtToken", token.token)
          if (token) {
            // console.log('inside' ,token.token)
            try {
              const decodeToken = decode(token.token);
              if (decodeToken.isAdmin) {
                console.log('You are an admin')
                navigate('/admin')
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
          console.error('Error:', 'error.response.data');
        }
    }

    useEffect(() => {
        const myHeaders = {
            'content-type': 'applications/json',
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
        }
        async function fetchData() { }
        fetch("http://localhost:3001/api/getStudentInfo", {
            method: 'GET',
            headers: myHeaders,
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
                // res.json()
            })
            .then(response => {
                setServerData(response.user)
                console.log("this is server data ", serverData)
                console.log('this is the user info', JSON.stringify(response.user));
            }).catch(error => {
                console.error(error);
            });
        fetchData()
        // (data) => setData(data.message));
    }, [])

    return (
        <div className="editModal-container">
            <div className="editModal">
                <form className="form-group" onSubmit={handleSubmit}>
                    <p>Please edit any of the following information. {serverData.username}</p>
                    <div className="form-group">
                        <label htmlFor="userName">User Name:</label>
                        <input 
                            name="userName" 
                            type="text" 
                            value={serverData.username}
                            onInput={handleInputChange}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            name="email"
                            type="text"
                            value={serverData.email}
                            onInput={handleInputChange}
                            >    
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            name="firstName" 
                            value={serverData.firstname}
                            onInput={handleInputChange}
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            name="lastName" 
                            value={serverData.lastname}
                            onInput={handleInputChange}
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone:</label>
                        <input 
                            name="phone" 
                            value={serverData.telephone}
                            onInput={handleInputChange}
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input 
                            name="address" 
                            value={serverData.address}
                            onInput={handleInputChange}
                        >
                        </input>
                    </div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}