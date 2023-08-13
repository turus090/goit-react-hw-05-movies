import { useParams } from 'react-router-dom'
import s from './cast.module.scss'

const Cast = () => {
    const {moveId} = useParams()
    return (
        <ul className={s.cast}>
            <li className={s.cast_list}>
                <img className={s.cast_list_img}/>
                <p className={s.cast_list_name}>123</p>
                <p className={s.cast_list_character}></p>
            </li>
        </ul>
    )
}

export default Cast