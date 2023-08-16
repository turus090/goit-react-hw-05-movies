import s from './movies.module.scss';
import { Notify } from 'notiflix';
import {useState} from 'react'
import axios from 'axios';
import MoviesList from './MoviesList';
const Movies = () => {

  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState([])
  const getFilms = () => {
    const baseUrl = "https://api.themoviedb.org/3/search/movie"
    axios.get(`${baseUrl}?query=${searchValue}&include_adult=true&language=en-US&page=1`,
    {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ',
      },
    }).then(res=>{setSearchList(res.data.results)})
  }
  const handeleUpdateSearch = (newValue) => {
    setSearchValue(newValue)
  }
const startSerach =() =>{
  if (searchValue.length > 0){
    getFilms()
  } else {
    Notify.info("Please entry film name")
  } 
}
window.addEventListener('keydown',(e) => {
  if(e.key === 'Enter' ){
    if (searchValue.length > 0){
      getFilms()
    } else {
      Notify.info("Please entry film name")
    } 
  }
})
  return (
    <div className={s.container}>
      <div className={s.container_search}>
        <input 
          className={s.container_search_input} 
          placeholder='Write film name to search'
          value={searchValue}
          onChange={(e)=>handeleUpdateSearch(e.target.value)}
          />
        <button 
        className={s.container_search_btn}
        onClick={startSerach}
        >Go</button>
      </div>
      {
        searchList.length > 0 &&
        <MoviesList
          films={searchList}
        />
      }
    </div>
  );
};

export default Movies;
