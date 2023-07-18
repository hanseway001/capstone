import {Link} from 'react-router-dom'


export const styles = {
    link: {
      color: "teal",
      cursor: "pointer"
    }
  };
  
const Navbar = () => {
    return (
        <nav className='navbar'>
             <Link style={styles.link} to={'/'}>Home</Link>
             <Link style={styles.link} to={'/Login'}>Login</Link>
        </nav>
    )
}

export default Navbar 