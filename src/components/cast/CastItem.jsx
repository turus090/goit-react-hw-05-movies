import s from './cast.module.scss'
const CastItem = ({imgSrc,name,role}) => {
    return(
        <li className={s.list_item}>
            <img className={s.list_item_img} src={imgSrc} alt={name}/>
            <p className={s.list_item_name}>{name}</p>
            <p className={s.list_item_role}>{role}</p>
        </li>
    )
}

export default CastItem