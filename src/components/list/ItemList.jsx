import { Link, useLocation } from 'react-router-dom';
import s from './list.module.scss';

const ItemList = ({ title, id }) => {
  const location = useLocation();
  return (
    <li className={s.list_list_item}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={s.list_list_item_link}
      >
        {title}
      </Link>
    </li>
  );
};

export default ItemList;
