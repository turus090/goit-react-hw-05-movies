import s from './movieDetails.module.scss';
import { useState, useEffect, useRef } from 'react';
import {
  Link,
  useParams,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';
import { getMovieDetails } from 'common/requests';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getMovieDetails(movieId).then(res => {
      setGenres(res.genres);
      setMovieInfo(res);
    });
  }, [movieId]);

  const handleGoBack = () => {
    localStorage.setItem('goBack', 'true');
    navigate(fromLocation.current);
  };
  localStorage.setItem('search', movieInfo.original_title);
  return (
    <div>
      <button className={s.link} onClick={handleGoBack}>
        Go back
      </button>
      <div className={s.container}>
        <img
          className={s.container_img}
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/original${movieInfo.poster_path}`
              : `https://www.iconarchive.com/download/i99782/designbolts/free-multimedia/Film.1024.png`
          }
          alt=""
        />
        <ul className={s.container_info}>
          <li className={s.container_info_item}>
            <h2 className={s.container_info_item_name}>
              {' '}
              {movieInfo.original_title}
            </h2>
            <p className={s.container_info_item_text}>
              {' '}
              {movieInfo.vote_average}
            </p>
          </li>
          <li className={s.container_info_item}>
            <h2 className={s.container_info_item_title}>Overview</h2>
            <p className={s.container_info_item_text}>{movieInfo.overview}</p>
          </li>
          <li className={s.container_info_item}>
            <h2 className={s.container_info_item_title}>Genres</h2>
            <p className={s.container_info_item_genres}>
              {genres && genres.map(el => <span key={el.id}>{el.name}</span>)}
            </p>
          </li>
        </ul>
      </div>
      <div className={s.container_additions}>
        <p className={s.container_additions_text}>Additions information</p>
        <ul className={s.container_additions_list}>
          <li className={s.container_additions_list_item}>
            <Link
              to={`/movies/${movieId}/cast`}
              className={s.container_additions_list_item_link}
            >
              Cast
            </Link>
          </li>
          <li className={s.container_additions_list_item}>
            <Link
              to={`/movies/${movieId}/reviews`}
              className={s.container_additions_list_item_link}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <p className={s.container_additions_text}></p>
      </div>
      <Routes>
        <Route path="/cast" element={<Cast />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
