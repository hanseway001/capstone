import {Link} from 'react-router-dom'
// import LogoutButton from './LogoutButton';

export const styles = {
    // link: {
    //   color: "teal",
    //   cursor: "pointer"
    // }
  };
  
const HomePageNavbar = () => {
    return (
        <header>

        <div className="regHeader row, center, spacing">
          <div className="row, center">
            <img className="regIcon" src="src/images/iconL.png" alt="" />
            <p className="titleSize white">Capstone</p>
            <div className="regSearchbar center">
              <img className="searchIcon" src="src/images/searchIcon.png" alt="search icon" />
              <input className="navInput" type="text" placeholder="Search" />
            </div>
          </div>

          <div className="row, center">
            <img className="userImg" src="src/images/user.png" alt="user" />
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
        <nav className='navbar'>
             <Link style={styles.link} to={'/'}>Home</Link>
             <Link style={styles.link} to={'/Login'}>Login</Link>
        </nav>
      </header>
    )
}

export default HomePageNavbar 