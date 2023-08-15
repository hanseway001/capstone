import React from "react";
import { useState, useEffect } from "react";
import "./EditUserModal.css"
import axios from 'axios'
// import { updateUserByID } from "../../../server/models/userModel";
// const User = require('../models/userModel');


export const EditUserModal = ({onClose, children}) => {
    const [serverData, setServerData] = useState({
        user_id: '',
        username: '',
        email: '',
        hash: '',
        firstname: '',
        lastname: '',
        telephone: '',
        address: '',
        create_date: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'userName') {
            setServerData(prevState => {
                let newUserName = {username: value}
                let copyServerData = Object.assign({}, serverData, newUserName)

                return  copyServerData                           
            })
        } else if (name === 'email') {
            setServerData(prevState => { 
                let newEmail = {email: value}
                let copyServerData = Object.assign({}, serverData, newEmail);  // creating copy of state variable jasper

                return  copyServerData                                 // return new object jasper object
            });
        } else if (name === 'firstName') {
            setServerData(prevState => { 
                let newFirstName = {firstname: value}
                let copyServerData = Object.assign({}, serverData, newFirstName)

                return  copyServerData 
            });
        } else if (name === 'lastName') {
            setServerData(prevState => { 
                let newLastName = {lastname: value}
                let copyServerData = Object.assign({}, serverData, newLastName)

                return  copyServerData                       
            });
        } else if (name === 'phone') {
            setServerData(prevState => { 
                let newPhone = {telephone: value}
                let copyServerData = Object.assign({}, serverData, newPhone)

                return  copyServerData 
            });
        } else if (name === 'address') {
            setServerData(prevState => { 
                let newAddress = {address: value}
                let copyServerData = Object.assign({}, serverData, newAddress)

                return  copyServerData 
            });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('Submit button clicked');
        try {
            const response = await axios.post('http://localhost:3001/api/editUserInfo', { serverData },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                },
                body: serverData
            }
            )

            // console.log(res)
            // console.log('after axios.post')
            onClose()
            
        } catch (error) {
            console.error('Error:', error);
            onClose()
        }
        // console.log('should close modal here also')
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
                {children}
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