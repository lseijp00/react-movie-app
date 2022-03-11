import React, { useEffect, useState } from 'react'
import getMovie from '../services/getMovie'
import { Movie } from './../components/Movie';
import './Detail.css'
import '../styles/Movie.css'

export default function Detail({params}) {

  var  { id }  = params
  console.log({params})
  const [movie, setMovie] = useState([])
 
  useEffect(function() {
    getMovie({id}).then(movie => setMovie(movie))
  }, [id])
  
  const styles = {
    backgroundImage: `url(${movie.backdrop_path})`,
  }

  
  return (
    <>
      <section className='Background' style={styles}>
      </section>
      <section className='section-movie'>
        <div className='details-top'>
          {
            <Movie
              key={movie.id}
              title={movie.original_title}
              url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              detailed={true}
            />
          }
          <div>
            <h1 className='movie-title'>{movie.original_title}</h1>
            <p className='movie-average'>{movie.vote_average}</p>
          </div>
        </div>

        <div className='details--bottom'>

          <h2 className='movie-sinopsis'>{movie.overview}</h2>
        </div>
      </section>
      
    </>
  )  
  
}
