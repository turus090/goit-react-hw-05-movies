import s from './cast.module.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import CastItem from './CastItem'
const Cast = () => {
    const [castList, setCastList] = useState([])
    const {movieId} = useParams()
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,{
            headers: {
                accept: 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ',
              }
        }).then(res=>{
            setCastList(res.data.cast);
        })
   
    
    return (
        <ul className={s.list}>
           {castList.map(castItem=>(
            <CastItem
                key={castItem.id}
                imgSrc={`https://image.tmdb.org/t/p/original${castItem.profile_path}`}
                name={castItem.name}
                role={castItem.character}
            />
           ))}
        </ul>
    )
}

export default Cast