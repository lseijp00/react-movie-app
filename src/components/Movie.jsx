import React from 'react'
import '../styles/Movie.css'

export const Movie = ({ title, id, url}) => {
  return (
    <div className='Pelicula'>
      <img alt={title} src={url} />
      <div className="Movie--details">
        <h2>{title}</h2>
        <p>ID: {id}</p>
      </div>  
    </div>
  )
}
