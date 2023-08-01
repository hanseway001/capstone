import {Link} from 'react-router-dom'


export const styles = {
    // link: {
    //   color: "teal",
    //   cursor: "pointer"
    // }
  };
  
const HomePageNavbar = () => {
    return (
        <header>

        <div className="HPnavbarHeader row, center, spacing">
          <div className="row, center">
            <img class="HPnavbarIcon" src="src/images/iconL.png" alt="" />
            <p class="titleSize white">Capstone</p>
            <div className="HPnavbarSearchbar center">
              <img className="searchIcon" src="src/images/searchIcon.png" alt="search icon" />
              <input className="navInput" type="text" placeholder="Search" />
            </div>
          </div>

          <div className="row, center">
            <img className='bellIcon' src="src/images/bellicon.png" alt="bell icon" />
            <img className='gearIcon' src="src/images/gearicon.png" alt="gear icon" />
            <img class="userImg" src="src/images/user.png" alt="user" />
            <h5 className="white">Nicolas M.</h5>
            <img className='downarrowIcon' src="src/images/downarrow.png" alt="down arrow" />
          </div>
        </div>

        <div className="HPnavbarLinkContainer">
          <Link className="white" style={styles.link} to={'/Courses'}>
            Courses
          </Link>
          <Link style={styles.link} to={'/Student'}>
            Student
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

export default HomePageNavbar 