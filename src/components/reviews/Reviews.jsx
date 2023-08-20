import s from './reviews.module.scss'
import { useState } from "react"
import { useParams } from "react-router-dom"
import ReviewsItem from './ReviewsItem'
import ReviewsEmpty from './ReviewsEmpty'
import { getReviews } from 'common/requests'


const Reviews = () => { 
const [reviewsList, setReviewsList] = useState([])
const {movieId} = useParams()
getReviews(movieId).then(res=>{
    setReviewsList(res.results)
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