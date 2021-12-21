import { DiscoverMovies, GetMovieGenres } from '../../services/MovieServices'
import { GET_MOVIES, SAVE_MOVIE_RATING } from '../types'

export const LoadDiscoverMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await DiscoverMovies()
      const genres = await GetMovieGenres()
      const arr = []

      function mapGenresToMovies() {
        movies.map((movie) => {
          genres.map((genre) => {
            const check = movie.genre_ids.indexOf(genre.id)
            if (check > -1) {
              if ('genres' in movie) {
                return movie.genres.push(genre.name)
              } else {
                return (movie = { ...movie, genres: [genre.name] })
              }
            }
          })

          return arr.push(movie)
        })
        return arr
      }
      mapGenresToMovies()
      arr.sort((a, b) => (a.original_title > b.original_title ? 1 : -1))
      dispatch({ type: GET_MOVIES, payload: arr })
    } catch (error) {
      throw error
    }
  }
}

export const SaveRating = (title, rating) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SAVE_MOVIE_RATING, payload: [title, rating] })
    } catch (error) {
      throw error
    }
  }
}
