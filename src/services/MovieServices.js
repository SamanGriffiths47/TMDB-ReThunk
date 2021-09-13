import { Client } from './'

export const GetDiscoverMovies = async () => {
  try {
    const res = await Client.get(
      `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetGenres = async () => {
  try {
    const res = await Client.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=en-US'
    )
    console.log(res.data.genres)
    return res.data.genres
  } catch (error) {
    throw error
  }
}
