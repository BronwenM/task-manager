import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__link'>HOME</Link>
      <Link to='/tasks/new' className='navbar__link'>NEW TASK +</Link>
      <Link to='/groups' className='navbar__link'>GROUPS</Link>
      <Link to='/tags' className='navbar__link'>TAGS</Link>
      <Link to='/calendar' className='navbar__link'>CALENDAR</Link>
    </nav>
  )
}

export default Navbar