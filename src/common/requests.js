import axios from "axios"

const authKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ'
const reqHeader = {
    headers:{
        accept: 'application/json',
        Authorization: authKey
    }
}

export const getPopularFilms = async ()=> { 
    const {data} = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        reqHeader
    )
    return data
}
export const getMovieDetails = async (movieId) => { 
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        reqHeader
    )
    return data
}

export const getCasts = async (movieId) => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        reqHeader
    )
    return data
}

export const getReviews = async (movieId) => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        reqHeader
    )
    return data
}

export const getSearchList = async (searchValue) => {
    const {data} = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=true&language=en-US&page=1`,
        reqHeader
    )
    return data
}