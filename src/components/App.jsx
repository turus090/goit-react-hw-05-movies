import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
import Movies from './movies/Movies';
import MoviesDetails from './movieDetails/MovieDetails';
import Reviews from './reviews/Reviews';
import Cast from './cast/Cast';
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
        path='/movies/:movieId/'
        element = {<MoviesDetails/>}
        />
         <Route
            path='/movies/:movieId/cast'
            element={
            <>
              <MoviesDetails/>
              <Cast/>
            </>
            }
          />   
        <Route
            path='/movies/:movieId/reviews'
            element={
            <>
              <MoviesDetails/>
              <Reviews/>
            </>
            }
          />   
      </Routes>
      
   </BrowserRouter>
  );
};

export default App