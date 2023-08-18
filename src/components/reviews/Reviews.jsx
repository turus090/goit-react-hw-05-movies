import s from './reviews.module.scss'
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import ReviewsItem from './ReviewsItem'
import ReviewsEmpty from './ReviewsEmpty'


const Reviews = () => { 
const [reviewsList, setReviewsList] = useState([])
const {movieId} = useParams()
 axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ' 
    }
 }).then(res=>{
    setReviewsList(res.data.results)
 })
 const ReviewCollection = reviewsList.map(item=> (
    <ReviewsItem 
        key={`reviewBy${item.author_details.username}`}
        author={item.author_details.username}
        content={item.content}
    />
 ))
    return (
        <ul className={s.list}>
            {reviewsList.length > 0  
                ? ReviewCollection
                : <ReviewsEmpty/>
            }
        </ul>
    )
}
export default Reviews