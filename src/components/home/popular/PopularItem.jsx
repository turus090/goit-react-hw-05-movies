import {Link} from 'react-router-dom'
import s from './popular.module.scss'
const PopularItem = ({title, id}) => {
    return (
        <li className={s.popular_list_item}>
            <Link to={`/movies/${id}`} className={s.popular_list_item_link}>{title}</Link>
        </li>
    )
}

export default PopularItem