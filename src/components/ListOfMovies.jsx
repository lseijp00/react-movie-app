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

  return (
    <>
      <FiltradoBotones />
      <div className='Peliculas'>
      {movies.map(singleMovie =>            
        <Movie 
          key={singleMovie.id} 
          title={singleMovie.original_title} 
          url={singleMovie.url} 
          id={singleMovie.id}
          />
          
        )
      }
      </div>
      
    </>
  )  
  
}
