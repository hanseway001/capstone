import { Link } from "react-router-dom";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export function Courses() {
  return (
    <div className="App">
      <header>

        <div className="regHeader row, center, spacing">
          <div className="row, center">
            <img class="regIcon" src="src/images/iconL.png" alt="" />
            <p class="titleSize white">Capstone</p>
            <div className="regSearchbar center">
              <img className="searchIcon" src="src/images/searchIcon.png" alt="search icon" />
              <input className="navInput" type="text" placeholder="Search" />
            </div>
          </div>

          <div className="row, center">
            <img class="userImg" src="src/images/user.png" alt="user" />
            <h5 className="white">Nicolas M.</h5>
          </div>
        </div>

        <div className="regLinkContainer">
          <Link style={styles.link} to={'/Courses'}>
            Courses
          </Link>
          <Link className="white" style={styles.link} to={'/Registration'}>
            Registration
          </Link>
          <Link style={styles.link} to={'/About'}>
            About
          </Link>
        </div>
      </header>

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