import { Client } from './'

export const DiscoverMovies = async () => {
  try {
    const res = await Client.get(
      `/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieGenres = async () => {
  try {
    const res = await Client.get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    )
    console.log(res.data.genres)
    return res.data.genres
  } catch (error) {
    throw error
  }
}
