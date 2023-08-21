import { useState } from 'react';
import s from '../../components/home/popular/popular.module.scss'
import PopularList from 'components/home/popular/PopularList';
import { getPopularFilms } from 'common/requests';

const Home = () => {
  const [filmList, setFilmList] = useState([])
  getPopularFilms().then((res)=>{
    setFilmList(res.results)
  })
return (
  <div className={s.popular}>
    <h2 className={s.popular_title}>Trending today</h2>
    <PopularList filmList={filmList}/>
  </div>
);
}

export default Home