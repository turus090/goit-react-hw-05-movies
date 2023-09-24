import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Header from './header/Header';
//import Home from '../pages/home/Home';
//import MoviesPage from 'pages/moviesPage/MoviesPage';
//import MoviesItemPage from 'pages/moviesItemPage/MoviesItemPage';

const Header = lazy(() => import('components/header/Header.jsx'));
const Home = lazy(() => import('../pages/home/Home.jsx'));
const MoviesPage = lazy(() => import('../pages/moviesPage/MoviesPage.jsx'));
const MoviesItemPage = lazy(() =>
  import('../pages/moviesItemPage/MoviesItemPage.jsx')
);

const App = () => {
  return (
    <Suspense>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MoviesItemPage />} />
          </Route>
          <Route path="/goit-react-hw-05-movies" element={<Header />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
