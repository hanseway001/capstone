import { Link } from "react-router-dom";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export default function Error() {
  return (
    <div className="App">
      <h2>404</h2>
      <h1>Error: Sorry the page you are looking fo does not exist</h1>
      <h4>Pages:</h4>
      <Link style={styles.link} to={'/'}>
        Home
      </Link>
  
    </div>
  );
}