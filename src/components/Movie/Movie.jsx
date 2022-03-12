import React from 'react'
import { Link } from 'wouter'
import './Movie.css'
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

export const Movie = ({ title, id, url, detailed, tipo}) => {
  
  const cn= detailed ? 'Pelicula PeliculaDetailed' : 'Pelicula'
  
  return (
    
    <Link to={`/movie/${id}`}>
      <div className={`${cn} ${tipo}`}>
        <RenderSmoothImage loading="lazy" objectFit='cover' alt={title} src={url} />
        <div className="Movie--details">
          <h2>{title}</h2>  
          <p>ID: {id}</p>
        </div>  
      </div>
    </Link>
  )
}
