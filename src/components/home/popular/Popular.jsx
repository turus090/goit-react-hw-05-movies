import {useState } from 'react';
import PopularItem from './PopularItem';
import s from './popular.module.scss'
import { getPopularFilms } from 'common/requests';
const Popular =  () => {
    const [filmList, setFilmList] = useState([])
    getPopularFilms().then((res)=>{
      setFilmList(res.results)
    })
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
