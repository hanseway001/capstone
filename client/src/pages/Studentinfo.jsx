import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditUserModal } from "../components/EditUserModal";

//maybe not best plass for btn css
import "../App.css"


export default function StudentInfo() {
  const [serverData, setServerData] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false)

  const handleCloseModal = () => {
    setEditModalOpen(false);
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

      })
      .then(response => {
        setServerData(response.user)
        // console.log('this is the user info', JSON.stringify(serverData));
      }).catch(error => {
        console.error(error);
      });
    fetchData()
  }, [])

  return (

    <div>
      <Navbar />
      <div className="content">
      <h1>Student Info</h1>
      <div>
        <TableContainer >
          <Table component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Telephone</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell>{serverData.username}</TableCell>
                <TableCell>{serverData.email}</TableCell>
                <TableCell>{serverData.firstname}</TableCell>
                <TableCell>{serverData.lastname}</TableCell>
                <TableCell>{serverData.telephone}</TableCell>
                <TableCell>{serverData.address}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
              <button className="btn" onClick={() => setEditModalOpen(true)}>
                Edit
              </button>
        </TableContainer>
      { editModalOpen && <EditUserModal onClose={() => handleCloseModal()}>Edit User Modal</EditUserModal>}
      </div>
      </div>
    </div>

  )
}