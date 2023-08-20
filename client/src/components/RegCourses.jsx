import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';

export default function CourseInfo() {
    const [serverData, setServerData] = useState([]);
    //create state to handle search form data

    //   const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     //call 

    //     try {
    //       const response = await axios.post('http://localhost:3001/api/removeCourse', { field: username, searchValue: password },
    //         {
    //           headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //         }
    //       );

    //     } catch (error) {
    //       console.error('Error:', error.response.data);
    //     }
    //   }

    useEffect(() => {
        console.log('req Courses loading')
        const myHeaders = {
            'content-type': 'applications/json',
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
        }
        async function fetchData() { }
        fetch("http://localhost:3001/api/registeredCourses", {
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
                setServerData(response.course)
                console.log('this is the serverdata', JSON.stringify(serverData[0]));
                console.log('this is response ', response.course)
            }).catch(error => {
                console.error(error);
            });
        fetchData()
    }, [])

    return (
        <div className="App">

            <div className="regCourseContent">
                <h1>Registered Course Info</h1>

                <TableContainer>
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
                                <TableCell>Remove Course</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {serverData.map((item, index) => (
                                <TableRow key={item.course_id}>
                                    <TableCell>{item.course_id}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.classroom_number}</TableCell>
                                    <TableCell>{item.maximum_capacity}</TableCell>
                                    <TableCell>{item.credit_hour}</TableCell>
                                    <TableCell>{item.tuition_cost}</TableCell>
                                    <TableCell><button className="whiteButton">Remove</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}

