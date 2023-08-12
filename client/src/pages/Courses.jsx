import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";
import Navbar from "../components/Navbar";
import { useEffect, useState} from "react";
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


// export const styles = {
//   link: {
//     color: "teal",
//     cursor: "pointer"
//   }
// };

// const App = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Function to call the API on server load
//     const callServerFunction = async () => {
//       try {
//         // const response = await axios.get('/api/callFunction');
//         const response = await axios.get('https://localhost:3001/protected/Courses', 
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           }
//       });
//         // goes to routes/authRoutes.js then goes to courseModel 
//         setMessage(response.data.message);
//       } catch (error) {
//         console.error('Error calling server function:', error);
//       }
//     };

//     callServerFunction();
//   }, []);

//   return (
//     <div>
//       <h1>Hello from React adsfafsaf</h1>
//       <p>Message from the floating dirt orb: {message}</p>
//     </div>
//   );
// };
// // export default App;

//   const app = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//        client.get('?_limit=10').then((response) => {
//           setPosts(response.data);
//        });
//     }, []);
//     // return (
//       // ...
//       // );  
//     };



  // NEW STUFF
 
// export const styles = {
//   link: {
//     color: "teal",
//     cursor: "pointer"
//   }
// };


export default function StudentInfo() {
  const [serverData, setServerData] = useState({});
  
  useEffect( () => {
    const myHeaders = {
      'content-type': 'applications/json',
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
    async function fetchData() {}
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
      console.debug('this is the user info', JSON.stringify(serverData));
      console.log(serverData)
    }).catch(error => {
      console.error(error);
    });
  fetchData()
      // (data) => setData(data.message));
  }, [])
// }
// END OF NEW STUFF
// console.log(Course);



// export default function Courses() {
  return (
    <div className="App">
      {/* <HomePageNavbar /> */}
    
    {/* <div className="content"> */}
        {/* <Navbar /> */}
        <h1>Course Info</h1>
        <h4>Pages:</h4>
        <div>
          
  <Table>

        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Classroom Number</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Credit Hours</TableCell>
            <TableCell>Tuition cost</TableCell>
          </TableRow>
        </TableHead>
  
        <TableBody>
        {   
        // Object.entries(course).map(([key, val]) => 
        // <h2 key={key}>{key}: {val}</h2>
        // )
        // Object.entries(Course).map((item, index) => (
          <TableRow >
              {/* <td>{item.title}</td> */}
              {/* <td>{item.description}</td> */}
              {/* <td>{item.classroom_number}</td>  */}
              {/* <td>{item.maximum_capacity}</td>  */}
              {/* <td>{item.credit_hour}</td>  */}
              {/* <td>{item.tuition_cost}</td>  */}
            <TableCell>{serverData.title}</TableCell>
            <TableCell>{serverData.description}</TableCell>
            <TableCell>{serverData.classroom_number}</TableCell>
            <TableCell>{serverData.maximum_capacity}</TableCell>
            <TableCell>{serverData.credit_hour}</TableCell>
            <TableCell>{serverData.tuition_cost}</TableCell>
          </TableRow>
          // ))
        } 
        </TableBody>
    </Table>
      </div>
    {/* <p>JSON.stringify(serverData)</p> */}
    </div>
  
  )  
}