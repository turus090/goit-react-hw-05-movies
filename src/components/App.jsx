import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './header/Header';
import Home from '../pages/home/Home';
import MoviesPage from 'pages/movies/MoviesPage';
import MoviesItemPage from 'pages/moviesItem/MoviesItemPage';

const App = () => {
  return (
   <BrowserRouter>
       <Routes>
<Route  path='/'
         element = {<Header/>}>

        <Route
         index
          element = {<Home/>}
        />
        <Route
         path='/movies'
         element = {<MoviesPage/>}
        />
        <Route 
        path='/movies/:movieId/*'
        element = {<MoviesItemPage/>}
        />
        </Route>
      </Routes>
      
   </BrowserRouter>
  );
};

export default App