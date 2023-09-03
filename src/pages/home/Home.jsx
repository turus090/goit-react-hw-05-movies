import { useState } from 'react';
import s from './home.module.scss'
import { getPopularFilms } from 'common/requests';
import List from 'components/list/List';

const Home = () => {
  const [filmList, setFilmList] = useState([])
  getPopularFilms().then((res)=>{
    setFilmList(res.results)
  })
return (
  <div className={s.home}>
    <h2 className={s.home_title}>Trending today</h2>
    <List store = {filmList}/>
  </div>
);
}

export default Home