import './Header.css'
import { Link } from 'wouter'
import NavButton from '../NavButton/NavButton'
import Logo from '../Logo/Logo'

export const Header = () => {
  return (
    <div className='Header'>
      <Logo />
      
      <nav className='nav-menu'>
        <NavButton path='/' title='Inicio'/>
        <NavButton path='/movies/posters' title='Populares'/>
        <NavButton path='/' title='Quiénes somos'/>
      </nav>
    </div>
  )
}
