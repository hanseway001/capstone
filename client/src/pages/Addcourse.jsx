import { Link } from "react-router-dom";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export default function Addcourse() {
  return (
    <div className="App">
      <h1>Add Course</h1>
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