import {Link} from 'react-router-dom'


export const styles = {
    // link: {
    //   color: "teal",
    //   cursor: "pointer"
    // }
  };
  
const Navbar = () => {
    return (
      <header>
      <div className="row, center">
        <img src="src/images/iconL.png" alt="" />
        <h1 className="white">CAPSTONE</h1>
      </div>
      <h2 className="center">COURSE MANAGEMENT MADE EASY</h2>

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
        <nav className='navbar'>
             <Link style={styles.link} to={'/'}>Home</Link>
             <Link style={styles.link} to={'/Login'}>Login</Link>
        </nav>
    </header>
    )
}

export default Navbar 