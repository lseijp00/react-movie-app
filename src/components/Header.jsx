import '../styles/Header.css'
import { Link } from 'wouter'
import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <div className='Header'>
      <img className='logoHero' src={logo} alt="asdsa" />

      <nav className='nav-menu'>
        <li className='nav-item'>
          <Link to="/" className='link'>Inicio</Link>
        </li>
        <li className='nav-item'>
          <Link to="/movies/posters" className='link'>Populares</Link>
        </li>
        <li className='nav-item'>
          <Link to="/" className='link'>Quiénes somos</Link>
        </li>
      </nav>
    </div>
  )
}
