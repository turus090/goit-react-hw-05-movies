import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
import Movies from './movies/Movies';
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
      </Routes>
      
   </BrowserRouter>
  );
};

export default App