import FiltradoBotones from '../FiltradoBotones/FiltradoBotones'
import React, { useEffect, useState } from 'react'
import getPopularMovies from '../../services/tmdb'
import { Movie } from '../Movie/Movie'
import { Spinner } from '../Spinner/Spinner'
import './ListOfMovies.css'

export default function ListOfMovies({params}) {

  var  { keyword }  = params
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)    
    getPopularMovies({keyword})
    .then(movies => {
      setMovies(movies)
      console.log(movies)
      setLoading(false)
    })
  }, [keyword])


  const category = (keyword==='posters') ? 'Posters' : 'Caratula'

  if(loading) return <Spinner />

  return (
    <div className='ListOfMovies'>
      <FiltradoBotones />
      
      <div className={`Peliculas ${category}`}>
        {loading 
        ? 
        (
          <Spinner/>
        )
        :
        (
          movies.map(singleMovie =>            
            <Movie 
              key={singleMovie.id} 
              title={singleMovie.original_title} 
              url={singleMovie.url} 
              id={singleMovie.id}
              tipo={category}
            />
          )
        )
      }
      </div>
      
    </div>
  )  
  
}
