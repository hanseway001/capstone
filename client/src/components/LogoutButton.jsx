import { React , useEffect, useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const LogoutButton = ({setLoginModalOpen}) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState()

  const handleLogout = () => {
    localStorage.clear()
    setLoggedIn(false)
    // setLoginModalOpen(false)
    navigate('/')
  }


  const renderAuthButton = () => {
    if (loggedIn) {
      return <button className='grayButton' onClick={handleLogout}>Logout</button>;
    } else {
      // return <Link to={'/Login'}>Login</Link>;
      return <button className='grayButton' onClick={() => setLoginModalOpen(true)}>Login</button>
    }
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken')
    // console.log('do i have a jwt', jwt)
    if ( jwt) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
 
  }, [])

  return (
    renderAuthButton()
  );
};

export default LogoutButton;
