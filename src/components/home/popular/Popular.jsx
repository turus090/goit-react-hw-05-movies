import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularItem from './PopularItem';
import s from './popular.module.scss'
const Popular = () => {
    const [filmList, setFilmList] = useState([])
  useEffect(() => {
    axios.get(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ',
        },
      }
    ).then(res=>{
        console.log(res.data)
        setFilmList(res.data.results)
    })
  },[]);
  return (
    <div className={s.popular}>
      <h2 className={s.popular_title}>Trending today</h2>
      <ul className={s.popular_list}>
        {
            filmList.map(film=> (
                <PopularItem title={film.title} id={film.id} key={`film-${film.id}`}/>
            ))
        }
      </ul>
    </div>
  );
};
export default Popular;
