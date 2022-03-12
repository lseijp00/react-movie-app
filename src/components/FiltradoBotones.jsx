import { Link, Route } from 'wouter';
import './ListOfMovies/ListOfMovies.css'


export default function FiltradoBotones() {
  return (
      <>
        <section className='FilterButtons'>
          <Link to="/movies/posters" className='boton'>Posters</Link>
          <Link to="/movies/caratula" className='boton'>Caratula</Link>
        </section>
      </>
  )  
}