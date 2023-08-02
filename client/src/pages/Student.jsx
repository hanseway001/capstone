import { Link } from "react-router-dom";
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
      <Link style={styles.link} to={'/Courses'}>
        Courses
      </Link>
      <Link style={styles.link} to={'/Registration'}>
        Registration
      </Link>
      <Link style={styles.link} to={'/About'}>
        About
      </Link>
    </div>
  
  )
}