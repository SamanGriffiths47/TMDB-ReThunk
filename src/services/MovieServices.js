import { Client } from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      `/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    return res.data.results
  } catch (error) {
    throw error
  }
}
