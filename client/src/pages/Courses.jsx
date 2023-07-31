import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";


export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export default function Courses() {
  return (
    <div className="App">
      <HomePageNavbar />

      <img src="images/logo.png"  alt="" />
      <h1>LOGIN</h1>
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
  );
}