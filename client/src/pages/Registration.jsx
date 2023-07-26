import { Link } from "react-router-dom";

export const styles = {
  // link: {
    // color: "teal",
    // cursor: "pointer"
  // }
};

export default function Registration() {
  return (
    <div className="App">
    <header>
      <div class="row, center">
        <img src="src/images/iconL.png" alt="" />
        <h1 class="white">CAPSTONE</h1>
      </div>
      <h2 class="center">COURSE MANAGEMENT MADE EASY</h2>

      <div className="linkContainer">
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
    </header>

    <div>
      <main class="loginMain">
        {/* <img src="images/logo.png"  alt="" /> */}
        <h1 class="center">Sign Up</h1>

        <div class="center">
          <div class="column">
            <h2>student login</h2>
            <input id="loginUsername" type="text" placeholder="username"/>
            <input id="loginEmail" type="text" placeholder="email"/>
            <input id="loginPassword" type="text" placeholder="password"/>
            <input id="loginFirstName " type="text" placeholder="first name"/>
            <input id="loginLastName" type="text" placeholder="last name"/>
            <input id="loginPhone" type="text" placeholder="phone"/>
            <input id="loginAddress" type="text" placeholder="address"/>
            <input class="button" type="submit"/>
          </div>
        </div>
      </main>
    
      {/* <main class="loginMain2">
        <img src="images/logo.png"  alt="" />
        <h1 class="center">ADMIN LOGIN</h1>
        <div class="center">
          <div class="column">
            <h2>student login</h2>
            <input id="loginUsername" type="text" placeholder="username"/>
            <input id="loginPassword" type="text" placeholder="password"/>
            <input class="button" type="submit"/>
          </div>
          <div class="column">
            <h2>admin login</h2>
            <input id="loginUsername" type="text" placeholder="username"/>
            <input id="loginPassword" type="text" placeholder="password"/>
            <input class="whiteButton" type="submit"/>
          </div>
        </div>
      </main> */}

    </div>
  </div>
);
}