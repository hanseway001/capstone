import { Link } from "react-router-dom";
// import HomePageNavbar from "../components/HomeNavBar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// use axios or fetch to post to server
// use axios.get or axious.post

// on page load do (function) called getCourseInfo (react onPageLoad (useEffect))
// that function does the axios or fetch post that goes to courseModel.js
// runs the findcourses function and returns the 'rows' (rename it)
// then take that and save it to state and use that state inside html and populate
// import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CourseInfo() {
  const [serverData, setServerData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [DropdownData, setDropdownData] = useState('');
//create state to handle search form data

  const handleSubmit = async (event) => {
    event.preventDefault();
    //call 
    
    try {
      console.log('we are in handle submit');
      const response = await axios.post('http://localhost:3001/api/searchCourseData', { field: DropdownData, searchValue: searchData },
      {
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'applications/json',
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`

          
        },
      }
      );
      // console.log(response.data); // Assuming the server returns some response data
      // let token = response.data
      // localStorage.setItem("jwtToken", token.token)
      // if (token) {
      //   // console.log('inside' ,token.token)
      //   try {
      //     const decodeToken = decode(token.token);
      //     if (decodeToken.isAdmin) {
      //       console.log('You are an admin')
      //       navigate('/admin')
      //     } else {
      //       console.log('routing to student page')
      //       navigate('/student')
      //     }
      //   }
      //   catch (error) {
      //     console.log('error', error)
      //   }
      // }
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  }

  useEffect(() => {
    const myHeaders = {
      'content-type': 'applications/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
    async function fetchData() { }
    fetch("http://localhost:3001/api/getCourseInfo", {
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
        setServerData(response.course)
        console.log('this is the serverdata', JSON.stringify(serverData[0]));
        console.log('this is response ', response.course)
      }).catch(error => {
        console.error(error);
      });
    fetchData()
    // (data) => setData(data.message));
  }, [])
  // }
  // END OF NEW STUFF
  // console.log(Course);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    if (name === 'searchValue') {
      setSearchData(value);
      console.log(value);
    }
    //  else if (name === 'fields') {
      // var e = document.getElementById("fields");
      // var text = e.options[e.selectedIndex].text;
      // setDropdownData(value);
      // console.log(value);
    // }
  };

  const handleDropdownChange = (event) => {
    setDropdownData(event.target.value)
    console.log(DropdownData);
  };

  // export default function Courses() {
  return (
    <div className="App">
      <div>
        <HomePageNavbar />
      </div>

        {/* <Navbar /> */}
      <div className="CourseContent">
        <h1>Course Info</h1>
        <div className="row">
          <h4>sort by course name</h4>
          <form onSubmit={handleSubmit}>
           <input type="text" name="searchValue" value={searchData} onInput={handleInputChange}/>
           <select name="fields" id="fields" value={DropdownData} onChange={handleDropdownChange}>
            <option value="capacity">Capacity</option>
            <option value="hours">Hours</option>
            <option value="cost">Cost</option>
           </select>
           <button type="submit">Search</button>
           {/* <input id="remember" name="remember" type="checkbox" onClick="validate()" /> */}

          </form>
        </div>
        {/* <div> */}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Classroom Number</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Credit Hours</TableCell>
              <TableCell>Tuition cost</TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="courseMain">
            {serverData.map((item, index) => (
              <TableRow key={item.course_id}>
                <TableCell>{item.course_id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.classroom_number}</TableCell>
                <TableCell>{item.maximum_capacity}</TableCell>
                <TableCell>{item.credit_hour}</TableCell>
                <TableCell>{item.tuition_cost}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>

  )
}

