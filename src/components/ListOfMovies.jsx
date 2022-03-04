import FiltradoBotones from './FiltradoBotones'
import React, { useEffect, useState } from 'react'
import getPopularMovies from '../services/tmdb'
import { Movie } from './Movie'

export default function ListOfMovies({params}) {
  var  { keyword }  = params
  const [movies, setMovies] = useState([])

  useEffect(function() {
    getPopularMovies({keyword}).then(movies => setMovies(movies))
  }, [keyword])

  const className = (keyword==='posters') ? 'Posters' : 'Caratula'

  return (
    <div className='ListOfMovies'>
      <FiltradoBotones />
      <div className={`Peliculas ${className}`}>
        {movies.map(singleMovie =>            
          <Movie 
            key={singleMovie.id} 
            title={singleMovie.original_title} 
            url={singleMovie.url} 
            id={singleMovie.id}
            tipo={className}
            />
            
          )
        }
      </div>
      
    </div>
  )  
  
}
