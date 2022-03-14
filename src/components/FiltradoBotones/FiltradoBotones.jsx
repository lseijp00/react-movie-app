import { Link, Route } from 'wouter';
import './FiltradoBotones.css'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

export default function FiltradoBotones() {

  const [showFilter, setShowFilter] = useState(false)

  const handleClick = () =>{
    setShowFilter(!showFilter)
  }

  return (
      <>
        <section className='FilterButtons'>
          <div onClick={handleClick}>
            <FilterListIcon />
            <h2>Filtrar</h2>
            <FilterListIcon />
          </div>
          <div className={showFilter ? `showFilter` : 'hideFilter'}>
            <h6>Categoría</h6>
            <hr />
            <Link to="/movies/posters" className='boton'>Posters</Link>
            <Link to="/movies/caratula" className='boton'>Carátula</Link>   
            
          </div>
          
        </section>
      </>
  )  
}