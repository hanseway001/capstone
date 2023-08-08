import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";

import Navbar from "../components/Navbar";
import { useEffect, useState} from "react";
import jwtDecode from "jwt-decode";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};


export default function Student() {
  const [serverData, setServerData] = useState('');
  
  useEffect( () => {
    const jwt = localStorage.getItem('jwtToken')
    const decodeJWT = jwtDecode(jwt)
    console.log(decodeJWT)
    setServerData(decodeJWT)
  //   const myHeaders = {
  //     'content-type': 'applications/json',
  //      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
  //   }
  //   async function fetchData() {}
  //   fetch("http://localhost:3001/api/Student", {
  //     method: 'GET',
  //     headers: myHeaders,
  //   })
  //   .then((res) => {
  //     // return res.json()
  //     if (res.status === 200) {
  //       // console.log(JSON.stringify(res))
  //       // setServerData(res.user)
  //       // console.log('this is the respose data ',res.user);
  //       // console.log('you are getting info from student', JSON.stringify(res))
  //       return res.json();
  //     } else {
  //       throw new Error('Something went wrong on api server!');
  //     }
  //     // res.json()
  //   })
  //   .then(response => {
  //     console.log(`response: ${JSON.stringify(response.user)}`)
  //     setServerData(response.user.username)
  //     // console.log('this is the server data ',response.user);
  //     // console.log('this is an email s',JSON.stringify(response.user.email))
  //     // console.log(typeof serverData)
  //     console.log('this is serverData', serverData)
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // fetchData()
  //     // (data) => setData(data.message));
  }, [])

  return (
    
    <div className="content">
      {/* <iframe src="https://giphy.com/embed/J7GGZj4j96Bl7V8LtB" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lemonerdy-amazing-you-rock-youre-J7GGZj4j96Bl7V8LtB">via GIPHY</a></p> */}
      {/* <Navbar /> */}
      <h1>Student</h1>
      <h4>Pages:</h4>
  
    <Link style={styles.link} to={'/studentinfo'}> Student Info {serverData.userName}</Link>
    </div>
  
  )
}