import React, { useEffect, useState } from 'react'
import getMovies from '../services/tmdb'
import { Movie } from './Movie'

export default function ListOfMovies({params}) {
  
  const  { keyword }  = params
  
  const [movies, setMovies] = useState([])
 
  useEffect(function() {
    getMovies({keyword}).then(movies => setMovies(movies))
  }, [keyword])

  return (
    <>
      {movies.map(singleMovie =>
        <Movie 
          key={singleMovie.id} 
          title={singleMovie.original_title} 
          url={singleMovie.url} 
          id={singleMovie.id}/>
        )
      }
    </>
  )  
  
}
