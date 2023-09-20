import s from './movies.module.scss';
import { Notify } from 'notiflix';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchList } from 'common/requests';
import List from 'components/list/List';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const [startSearch, setStartSearch] = useState(false);
  const inputRef = useRef(null);

  const startSerach = () => {
    setStartSearch(true);
    const searchValue = inputRef.current.value;
    console.log(searchValue);
    if (searchValue.length > 0) {
      setSearchParams({ search: searchValue });
    } else {
      Notify.info('Please entry film name');
    }
  };

  useEffect(() => {
    if (startSearch) {
      getSearchList(searchParams.get('search')).then(res => {
        setSearchList(res.results);
      });
    }
    localStorage.setItem('search', searchParams.get('search'));
  }, [searchParams, startSearch, setStartSearch]);

  return (
    <div className={s.container}>
      <form onSubmit={e => e.preventDefault()} className={s.container_search}>
        <input
          className={s.container_search_input}
          ref={inputRef}
          placeholder="Write film name to search"
          onChange={e => {
            setSearchParams({ search: e.target.value });
            setStartSearch(false);
          }}
          value={searchParams.get('search') ? searchParams.get('search') : ''}
        />
        <button className={s.container_search_btn} onClick={startSerach}>
          Go
        </button>
      </form>
      {searchList.length > 0 && <List store={searchList} />}
    </div>
  );
};

export default Movies;
