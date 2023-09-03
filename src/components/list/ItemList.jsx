import { Link } from 'react-router-dom'
import s from './list.module.scss'

const ItemList = ({title, id}) => {
    return(
        <li className={s.list_list_item}>
            <Link  to={`/movies/${id}`} className={s.list_list_item_link}>{title}</Link>
        </li>
    )
}

export default ItemList