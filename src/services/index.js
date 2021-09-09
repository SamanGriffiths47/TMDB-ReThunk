import Axios from 'axios'

export const Client = Axios.create({
  baseURL: `https://api.themoviedb.org/3`
})

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'
