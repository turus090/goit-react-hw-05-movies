import s from './movieDetails.module.scss'
import { useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {
    const {movieId} = useParams()
    const getMovieInfo = () => {
       axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,{
        headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ',
          },
       }).then(res=>setMovieInfo(res.data))
    }
    const [movieInfo, setMovieInfo] = useState({})
    const [genres, setGenres] = useState([])
    useEffect(()=>{
        setGenres(movieInfo.genres)
    },[movieInfo])
    getMovieInfo()
return (
    <div>
        <Link className={s.link} to="/movies">Go back</Link>
        <div className={s.container} >
            <img className={s.container_img} src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt='' /> 
            <ul className={s.container_info}>
              <li className={s.container_info_item}>
                 <h2 className={s.container_info_item_name}> {movieInfo.original_title}</h2>
                 <p className={s.container_info_item_text}> {movieInfo.vote_average}</p>
              </li>
              <li className={s.container_info_item}>
                 <h2 className={s.container_info_item_title}>Overview</h2>
                 <p className={s.container_info_item_text}>{movieInfo.overview}</p>
              </li>
              <li className={s.container_info_item}>
                 <h2 className={s.container_info_item_title}>Genres</h2>
                 <p className={s.container_info_item_genres}>{genres && genres.map(el=>(<span key={el.id}>{el.name}</span>))}</p>
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
                     >Cast</Link>
                </li>
                <li className={s.container_additions_list_item}>
                    <Link 
                    to={`/movies/${movieId}/reviews`}
                    className={s.container_additions_list_item_link}>Reviews</Link>
                </li>
            </ul>
            <p className={s.container_additions_text}></p>
        </div>
       
    </div>
)
}

export default MovieDetails