import ItemList from './ItemList'
import s from './list.module.scss'
const List = ({store}) => {
    return ( 
        <ul className={s.list}>
           {
           store.map(storeItem => (
            <ItemList
                title = {storeItem.title}
                id = {storeItem.id}
                key = {storeItem.id}
            />
            ))
           }
        </ul>
    )
}

export default List