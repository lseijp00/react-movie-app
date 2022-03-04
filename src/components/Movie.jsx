import React from 'react'
import { Link } from 'wouter'
import '../styles/Movie.css'

export const Movie = ({ title, id, url, detailed, tipo}) => {

  console.log(tipo)
  const className= detailed ? 'Pelicula PeliculaDetailed' : 'Pelicula'

  return (
    
    <Link to={`/movie/${id}`}>
      <div className={`${className} ${tipo}`}>
        <img alt={title} src={url} />
        <div className="Movie--details">
          <h2>{title}</h2>  
          <p>ID: {id}</p>
        </div>  
      </div>
    </Link>
  )
}
