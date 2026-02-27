import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <nav className='navbar'>
      <div className='navbar__header'>
        <Link to='/profile' className='navbar__user'>
          <img src='https://api.dicebear.com/9.x/bottts/svg' alt='User Avatar' className='navbar__user__avatar' />
          <p className='navbar__user__name'>Bronwen M.</p>
        </Link>
        <button className='navbar__toggle' onClick={handleToggle}>☰</button>
      </div>
      <div className='navbar__links-grp' open={isOpen}>
        <Link to='/' className='navbar__link'> 🏠 HOME</Link>
        <Link to='/tasks/new' className='navbar__link'>➕ NEW TASK</Link>
        <Link to='/groups' className='navbar__link'>🗃 GROUPS</Link>
        <Link to='/tags' className='navbar__link'>🏷️ TAGS</Link>
        <Link to='/calendar' className='navbar__link'>📆 CALENDAR</Link>
        <Link to='/settings' className='navbar__link'> ⚙ SETTINGS </Link>
      </div>
    </nav>
  )
}

export default Navbar