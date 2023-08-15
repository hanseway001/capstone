import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";

import Navbar from "../components/Navbar";
import RegCourses from "../components/RegCourses"
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};


export default function Student() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken')
    const decodeJWT = jwtDecode(jwt)
    console.log(decodeJWT)
    setServerData(decodeJWT)

  }, [])

  return (
    <div>
        <Navbar />

      <div className="content">
        {/* <iframe src="https://giphy.com/embed/J7GGZj4j96Bl7V8LtB" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lemonerdy-amazing-you-rock-youre-J7GGZj4j96Bl7V8LtB">via GIPHY</a></p> */}
        <h1>Student</h1>
        <h4>Pages:</h4>

        <Link style={styles.link} to={'/studentinfo'}> Student Info {serverData.userName}</Link>
        <RegCourses />
      </div>
    </div>

  )
}