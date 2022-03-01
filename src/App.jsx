import { Header } from './components/Header'
import './styles/ListOfMovies.css'
import FiltradoBotones from './components/FiltradoBotones';
import ListOfMovies from './components/ListOfMovies';
import { Route } from 'wouter';
import Detail from './pages/Detail'

const App = () => {
  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      
      <Route path='/movies' component={FiltradoBotones}/> 
      <Route path="/movies/:keyword" component={ListOfMovies}/>
      <Route path='/movie/:id' component={Detail} />
    </div>
  )
}
export default App
