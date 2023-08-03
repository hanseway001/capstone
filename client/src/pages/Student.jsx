import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";

import Navbar from "../components/Navbar";
import { useEffect, useState} from "react";



export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};


export default function Student() {
  const [serverData, setServerData] = useState('');
  
  useEffect( () => {
    const myHeaders = {
      'content-type': 'applications/json',
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
    async function fetchData() {}
    fetch("http://localhost:3001/api/example", {
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
      setServerData(response.message)
      console.debug(response.message);
    }).catch(error => {
      console.error(error);
    });
  fetchData()
      // (data) => setData(data.message));
  }, [])

  return (
    
    <div className="content">
      <Navbar />
      <h1>Student</h1>
      <h4>Pages:</h4>
      <div>
        <h2>student login</h2>
        <input id="loginUsername" type="text" placeholder="username"/>
        <input id="loginPassword" type="text" placeholder="password"/>
        <input type="submit"/>
      </div>
      <div>
        <h2>admin login</h2>
        <input id="loginUsername" type="text" placeholder="username"/>
        <input id="loginPassword" type="text" placeholder="password"/>
        <input type="submit"/>
      </div>
    <p>{serverData}</p>
    </div>
  
  )
}