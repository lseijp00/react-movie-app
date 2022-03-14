import React, { useEffect, useState } from 'react'
import getMovie from '../services/getMovie'
import { Movie } from '../components/Movie/Movie';
import './Detail.css'
import '../components/Movie/Movie.css'

export default function Detail({params}) {

  var  { id }  = params
  const [movie, setMovie] = useState('https://img.freepik.com/vector-gratis/diseno-avatar-persona_24877-38140.jpg')
  const [imageLoaded, setImageLoaded] = useState(false)
  
  useEffect(function() {
    setImageLoaded(false)
    getMovie({id})
    .then(movie => {
      setMovie(movie)
      setImageLoaded(true)
    })
  }, [id])
  
  
  const styles = {
    backgroundImage: `url(${movie.backdrop_path})`,
  }
  
  return (
    <>
      <section className='Background' style={styles} />
      <section className='section-movie'>
        <div className='details-top'>
          <picture>
            {
              imageLoaded
              ?
              <Movie
                key={movie.id}
                title={movie.original_title}
                url={movie.poster_path}
                detailed={true}
              />
              :
              <h1>Error</h1>
            }
          </picture>
          <div className='quepasa'>
            <h1 className='movie-title'>{movie.original_title}</h1>
            <p className='movie-average'>{movie.vote_average}</p>
          </div>
        </div>

        <div className='details--bottom'>

          <p className='movie-sinopsis'>{movie.overview}</p>
        </div>
      </section>
      
    </>
  )  
  
}
