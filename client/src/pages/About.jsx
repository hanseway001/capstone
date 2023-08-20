import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export default function About() {
  return (
    <div className="App">
      <Navbar />
      <div className="CourseContent">
        <p>We were here!</p>
      </div>
      <h1>About</h1>
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
  );
}