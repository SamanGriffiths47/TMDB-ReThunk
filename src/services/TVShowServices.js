import { Client } from './'

export const DiscoverShows = async () => {
  try {
    const res = await Client.get(
      `/discover/tv?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetShowGenres = async () => {
  try {
    const res = await Client.get(
      `/genre/tv/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    )
    console.log(res.data.genres)
    return res.data.genres
  } catch (error) {
    throw error
  }
}
