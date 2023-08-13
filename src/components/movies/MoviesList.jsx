import MoviesItem from './MoviesItem'
import s from './movies.module.scss'
const MoviesList = ({films}) => {
    const ListCollections = films.map(filmItem=>(
        <MoviesItem
            key={`film-${filmItem.id}`}
            title={filmItem.title}
            id={filmItem.id}
        />
    ))
    return (
        <ul className={s.list}>
            {ListCollections}
        </ul>
    )
}
export default MoviesList