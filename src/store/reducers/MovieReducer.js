const { GET_MOVIES, SAVE_MOVIE_RATING } = require('../types')

const iState = {
  discoverMovies: [],
  movieRatings: {}
}

export default function MovieReducer(state = iState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, discoverMovies: action.payload }
    case SAVE_MOVIE_RATING:
      return {
        ...state,
        movieRatings: {
          ...state.movieRatings,
          [action.payload[0]]: [action.payload[1]]
        }
      }
    default:
      return { ...state }
  }
}
