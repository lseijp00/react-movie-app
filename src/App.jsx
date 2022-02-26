import { useState } from 'react'
import { Link, Route } from 'wouter'
import './styles/ListOfMovies.css'
import { Header } from './components/Header'
import ListOfMovies from './components/ListOfMovies'

const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <section className='Peliculas'>
        <Link className="boton" to="/movies/posters">VER POSTERS</Link>
        <Link className="boton" to="/movies/caratulas">VER CARATULAS</Link>

        <Route 
          path="/movies/:keyword" 
          component={ListOfMovies}/>
      </section>
    </div>
  )
}
export default App
