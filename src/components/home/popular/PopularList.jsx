import PopularItem from './PopularItem';
import s from './popular.module.scss'
const PopularList =  ({filmList}) => {

    return (
        <ul className={s.popular_list}>
        {
            filmList.map(film=> (
                <PopularItem title={film.title} id={film.id} key={`film-${film.id}`}/>
            ))
        }
    </ul>
    )
};
export default PopularList;
