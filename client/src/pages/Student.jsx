import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";

import Navbar from "../components/Navbar";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export default function Student() {
  return (
    
    <div className="App">
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
    </div>
  
  )
}