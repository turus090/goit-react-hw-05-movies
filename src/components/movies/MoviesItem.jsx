import { Link } from 'react-router-dom'
import s from './movies.module.scss'
const MoviesItem = ({title, id}) => {
    return (
        <li className={s.list_item}>
            <Link to={`/movies/${id}`} className={s.list_item_link}>{title}</Link>
        </li>
    )
}

export default MoviesItem