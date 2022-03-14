import React from 'react'
import { Link } from 'wouter'
import './NavButton.css'

function NavButton({path, title}) {
  return (
    <li className='nav-item'>
      <Link to={path} className='link'>{title}</Link>
    </li>
    
  )
}

export default NavButton