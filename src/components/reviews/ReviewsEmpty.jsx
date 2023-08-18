import s from './reviews.module.scss'
const ReviewsEmpty = () => {
    return (
        <li className={s.list_itemEmpty}>
            <p className={s.list_itemEmpty_list}>Reviews list has been empty</p>
        </li>
    )
}
export default ReviewsEmpty