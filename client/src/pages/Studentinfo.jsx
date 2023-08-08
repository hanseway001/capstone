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
      console.debug('this is the user info', JSON.stringify(serverData));
    }).catch(error => {
      console.error(error);
    });
  fetchData()
      // (data) => setData(data.message));
  }, [])

  return (
    
    <div className="content">
        {/* <Navbar /> */}
        <h1>Student Info</h1>
        <h4>Pages:</h4>
        <div>
<Table>

        <TableBody>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>

        {/* { */}
          {/* // serverData.map((item, index) => ( */}
            <TableRow >
          {/* //   <td>{item.username}</td>
          //   <td>{item.email}</td>
          //   <td>{item.firstname}</td>
          //   <td>{item.lastname}</td>
        //   <td>{item.telephone}</td> */}
            <TableCell>{serverData.username}</TableCell>
            <TableCell>{serverData.email}</TableCell>
            <TableCell>{serverData.firstname}</TableCell>
            <TableCell>{serverData.lastname}</TableCell>
            <TableCell>{serverData.telephone}</TableCell>
          </TableRow>
        {/* // )) */}
      {/* } */}
      </TableBody>
</Table>
      </div>
    {/* <p>JSON.stringify(serverData)</p> */}
    </div>
  
  )
}