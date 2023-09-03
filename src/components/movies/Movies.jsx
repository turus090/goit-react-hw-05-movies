import s from './movies.module.scss';
import { Notify } from 'notiflix';
import {useEffect, useState} from 'react';
import { getSearchList } from 'common/requests';
import List from 'components/list/List';
const Movies = () => {

  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState([])
 
  const handeleUpdateSearch = (newValue) => {
    setSearchValue(newValue)
  }
const startSerach =() =>{
  if (searchValue.length > 0){
    getSearchList(searchValue).then(res=>{
      setSearchList(res.results)
    })
  } else {
    Notify.info("Please entry film name")
  } 
}
useEffect(()=>{
  getSearchList(searchValue).then(res=>{
    setSearchList(res.results)
  })
},[searchValue])
  return (
    <div className={s.container}>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className={s.container_search}
      >
        <input 
          className={s.container_search_input} 
          placeholder='Write film name to search'
          value={searchValue}
          onChange={(e)=>handeleUpdateSearch(e.target.value)}
          />
        <button 
          className={s.container_search_btn}
          onClick={startSerach}
        >
          Go
        </button>
      </form>
      {
        searchList.length > 0 &&
        <List
          store={searchList}
        />
      }
    </div>
  );
};

export default Movies;
