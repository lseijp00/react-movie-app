import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import ListOfMovies from './components/ListOfMovies'
import './styles/ListOfMovies.css'
import './styles/Header.css'

const App = () => {
  
  const [keyword, setKeyword ] = useState('poster')
  const [style, setStyle] = useState("Poster");
  return (
    <div className="App">
      <Header/>
      <section className={style}>
        <button onClick={() => setKeyword('poster') }>BACKGROUND</button>
        <button onClick={() => setKeyword('caratula')}>CARATULA</button>
        <ListOfMovies keyword={keyword}/>
      </section>
    </div>
  )
}
export default App
