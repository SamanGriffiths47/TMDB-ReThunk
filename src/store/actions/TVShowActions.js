import { DiscoverShows, GetShowGenres } from '../../services/TVShowServices'
import { GET_SHOWS, SAVE_SHOW_RATING } from '../types'

export const LoadDiscoverShows = () => {
  return async (dispatch) => {
    try {
      const shows = await DiscoverShows()
      const genres = await GetShowGenres()
      const arr = []

      function mapGenresToShows() {
        shows.map((show) => {
          genres.forEach((genre) => {
            const check = show.genre_ids.indexOf(genre.id)
            if (check > -1) {
              if ('genres' in show) {
                return show.genres.push(genre.name)
              } else {
                return (show = { ...show, genres: [genre.name] })
              }
            }
          })

          return arr.push(show)
        })
        return arr
      }
      mapGenresToShows()
      arr.sort((a, b) => (a.original_title > b.original_title ? 1 : -1))
      dispatch({ type: GET_SHOWS, payload: arr })
    } catch (error) {
      throw error
    }
  }
}

export const SaveRating = (title, rating) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SAVE_SHOW_RATING, payload: [title, rating] })
    } catch (error) {
      throw error
    }
  }
}
