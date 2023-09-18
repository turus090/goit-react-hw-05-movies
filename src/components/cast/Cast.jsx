import s from './cast.module.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CastItem from './CastItem';
import { getCasts } from 'common/requests';
const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  getCasts(movieId).then(res => {
    setCastList(res.cast);
  });
  return (
    <ul className={s.list}>
      {castList.map(castItem => (
        <CastItem
          key={castItem.id}
          imgSrc={
            castItem.profile_path
              ? `https://image.tmdb.org/t/p/original${castItem.profile_path}`
              : 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
          }
          name={castItem.name}
          role={castItem.character}
        />
      ))}
    </ul>
  );
};

export default Cast;
