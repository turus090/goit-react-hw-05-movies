import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
import Movies from './movies/Movies';
import MoviesDetails from './movieDetails/MovieDetails';
const App = () => {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route
          path ="/"
          element = {<Home/>}
        />
        <Route
         path='/movies'
         element = {<Movies/>}
        />
        <Route 
        path='/movies/:movieId/*'
        element = {<MoviesDetails/>}
        />
        
      </Routes>
      
   </BrowserRouter>
  );
};

export default App