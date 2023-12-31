import React, {useState} from "react";
import {Link} from 'react-router-dom'
// import Login from '../pages/login';
import LogoutButton from './LogoutButton';
import LoginModal from './LoginModal'
// import LogoutButton from './LogoutButton';

export const styles = {
    // link: {
    //   color: "teal",
    //   cursor: "pointer"
    // }
  };
  
const Navbar = () => {

  const [loginModalOpen, setLoginModalOpen] = useState(false)
  // const []

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  }

    return (
        <header>

        <div className="HPnavbarHeader row, center, spacing">
          <div className="row, center">
            {/* <img class="HPnavbarIcon" src="src/images/iconL.png" alt="" /> */}
            {/* <p className="titleSize white">Capstone</p> */}
                <img className="regIcon" src="src/images/iconL.png" alt="" />
                <p className="titleSize white">Capstone</p>
            <div className="HPnavbarSearchbar center">
                <div className="regSearchbar center">
                  <img className="searchIcon" src="src/images/searchIcon.png" alt="search icon" />
                  <input className="navInput" type="text" placeholder="Search" />
                </div>
            </div>
        </div>
          <div className="row, center">
            <img className='bellIcon' src="src/images/bellicon.png" alt="bell icon" />
            <img className='gearIcon' src="src/images/gearicon.png" alt="gear icon" />
            {/* <img class="userImg" src="src/images/user.png" alt="user" /> */}
            <img className="userImg" src="src/images/user.png" alt="user" />
            <h5 className="white"> Jim</h5>
            <img className='downarrowIcon' src="src/images/downarrow.png" alt="down arrow" />
          </div>
        </div>

        <div className="HPnavbarLinkContainer">
          <Link style={styles.link} to={'/'}>Home</Link>

          <Link className="" style={styles.link} to={'/Courses'}>
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
              {/* <Link style={styles.link} to={'/Login'}>Login</Link> */}
              { loginModalOpen && <LoginModal  onClose={() => handleCloseModal()}>Login Modal</LoginModal>}

             <LogoutButton setLoginModalOpen={setLoginModalOpen}/>
        </div>
        {/* <nav className='navbar'> */}
        {/* </nav> */}
      </header>
    )
}

export default Navbar 