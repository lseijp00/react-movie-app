import React, { useEffect, useState } from 'react'
import getMovie from '../services/getMovie'
import { MovieDetailed } from './../components/MovieDetailed';
import './Detail.css'

export default function Detail({params}) {

  var  { id }  = params
  const [movie, setMovie] = useState([])
 
  useEffect(function() {
    getMovie({id}).then(movie => setMovie(movie))
  }, [id])

  return (
    <>
      <section className='Detail' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
        <div className='details--right'>
          <h1>{movie.original_title}</h1>
          <h1>{movie.vote_average}</h1>
          <h2>{movie.overview}</h2>
        </div>
        {
          <MovieDetailed
            key={movie.id} 
            poster_path={movie.poster_path} 
            original_title={movie.original_title} 
            vote_average={movie.vote_average}/>
        }
      </section>
      
    </>
  )  
  
}
