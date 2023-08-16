import s from './cast.module.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Cast = () => {
    const [castList, setCastList] = useState([])
    const {movieId} = useParams()
    //console.log(useParams())
    useEffect(()=>{
        axios.get(`https://api.thmoviedb.org/3/movie/${movieId}/credits?language=en-US`,{
            headers: {
                accept: 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ',
              }
        }).then(res=>{
            console.log(res.data);
        })
    },[])
   
    
    return (
        <ul className={s.cast}>
            <li className={s.cast_list}>
                <img className={s.cast_list_img}/>
                <p className={s.cast_list_name}>123</p>
                <p className={s.cast_list_character}>222</p>
            </li>
        </ul>
    )
}

export default Cast