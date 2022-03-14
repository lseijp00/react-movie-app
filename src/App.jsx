
import { Header } from './components/Header/Header'
import FiltradoBotones from './components/FiltradoBotones/FiltradoBotones';
import ListOfMovies from './components/ListOfMovies/ListOfMovies';

import HomePage from './pages/HomePage'

import './components/ListOfMovies/ListOfMovies.css'

import { Route } from 'wouter';
import Detail from './pages/Detail'

const App = () => {
  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <section>
        <Route exact path="/" component={HomePage} />
      </section>
      <Route path='/movies' component={FiltradoBotones}/> 
      <Route path="/movies/:keyword" component={ListOfMovies}/>
      <Route path='/movie/:id' component={Detail} />
    </div>
  )
}
export default App
