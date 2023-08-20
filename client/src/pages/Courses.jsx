import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function CourseInfo() {
  const [serverData, setServerData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [DropdownData, setDropdownData] = useState('');
  //create state to handle search form data

  const handleSubmit = async (event) => {
    event.preventDefault();
    //call 

    // try {
      console.log('we are in handle submit');
      const myHeaders = {
        'content-type': 'applications/json',
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
      }
      async function fetchData() { }
      fetch("http://localhost:3001/api/searchCourseData", {
        method: 'GET',
        headers: myHeaders,
      })
      // const response = await axios.get('http://localhost:3001/api/searchCourseData', { field: DropdownData, searchValue: searchData },
      //   {
      //     headers: {
      //       // 'Content-Type': 'application/x-www-form-urlencoded',
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`


      //     },
      //   }
      // )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error('Something went wrong on api server!');
          }

        })
        .then(response => {
          setServerData(response.user)
          // console.log('this is the user info', JSON.stringify(serverData));
        }).catch(error => {
          console.error(error);
        });
    
      //  } catch (error) {
      // console.error('Error:', error.response.data);
    // }
  }


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
    // } catch (error) {
    //   console.error('Error:', error.response.data);
    // }
  // }

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
    };

    const handleDropdownChange = (event) => {
      setDropdownData(event.target.value)
      console.log(DropdownData);
    };

    // export default function Courses() {
    return (
      <div className="App">
        <div>
          {/* <HomePageNavbar /> */}
        </div>

        <Navbar />
        <div className="CourseContent">
          <h1>Course Info</h1>
          <div className="row">
            <h4>sort by course name</h4>
            <form onSubmit={handleSubmit}>
              <input type="text" name="searchValue" value={searchData} onInput={handleInputChange} />
              <select name="fields" id="fields" value={DropdownData} onChange={handleDropdownChange}>
                <option value="capacity">Capacity</option>
                <option value="hours">Hours</option>
                <option value="cost">Cost</option>
              </select>
              <button className="whiteButton" type="submit">Search</button>
              {/* <input id="remember" name="remember" type="checkbox" onClick="validate()" /> */}

            </form>
          </div>
          {/* <div> */}

          <div className="courseMain">
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
                  <TableCell>Add Course</TableCell>
                </TableRow>
              </TableHead>

              <TableBody >
                {serverData.map((item, index) => (
                  <TableRow key={item.course_id}>
                    <TableCell>{item.course_id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.classroom_number}</TableCell>
                    <TableCell>{item.maximum_capacity}</TableCell>
                    <TableCell>{item.credit_hour}</TableCell>
                    <TableCell>{item.tuition_cost}</TableCell>
                    <TableCell><Icon color="primary">add_circle</Icon></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
      </div>

    )
  }

