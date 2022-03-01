import React from 'react'
import { Link } from 'wouter'
import '../styles/Movie.css'

export const Movie = ({ title, id, url}) => {
  return (
    
    <Link to={`/movie/${id}`}>
      <div className='Pelicula'>
        <img alt={title} src={url} />
        <div className="Movie--details">
          <h2>{title}</h2>
          <p>ID: {id}</p>
        </div>  
      </div>
    </Link>
  )
}
