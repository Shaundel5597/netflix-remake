import dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.REACT_APP_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const endpoints = {
    topRatedMovies:'/movie/top_rated',
    upcomingMovies:'/movie/upcoming',
    popularMovies: '/movie/popular',
    tvShowsOnair: '/tv/on_the_air',
    comedyMovies: '/movie/comedy',
    horrorMovies: 'movie/horror'
}



export const tvShowsOnair = async () => {
    const response = await fetch (`${BASE_URL}${endpoints.tvShowsOnair}?api_key=${API_KEY}`)
    console.log(response)
    return response.json()
}

export const popularMovies = async () => {
    const response = await fetch (`${BASE_URL}${endpoints.popularMovies}?api key=${API_KEY}`)
    return
}

export const comedyMovies = async () => {
    const response = await fetch (`${BASE_URL}${endpoints.comedyMovies}?api key=${API_KEY}`)
    return
}

export const horrorMovies = async () => {
    const response = await fetch (`${BASE_URL}${endpoints.horrorMovies}?api_key=${API_KEY}`)
    return
}

export const topRatedMovies = async () => {
    const response = await fetch (`${BASE_URL}${endpoints.topRatedMovies}?api_key=${API_KEY}`)
    return response.json()
}

export const upcomingMovies = async () => {
    const response = await fetch (`${BASE_URL}${endpoints.upcomingMovies}?api_key=${API_KEY}`)
    return response.json()
}