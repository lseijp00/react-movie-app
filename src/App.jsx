
import { Header } from './components/Header'
import FiltradoBotones from './components/FiltradoBotones';
import ListOfMovies from './components/ListOfMovies';
import {Title} from './components/Title'

import './styles/ListOfMovies.css'

import { Route } from 'wouter';
import Detail from './pages/Detail'

const App = () => {
  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <section>
        <Route exact path="/" component={Title} />
      </section>
      <Route path='/movies' component={FiltradoBotones}/> 
      <Route path="/movies/:keyword" component={ListOfMovies}/>
      <Route path='/movie/:id' component={Detail} />
    </div>
  )
}
export default App
