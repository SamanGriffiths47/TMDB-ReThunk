const { GET_MOVIES, GET_SELECTION } = require('../types')

const iState = {
  movies: [],
  selection: {}
}

export default function MovieReducer(state = iState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case GET_SELECTION:
      return { ...state, selection: action.payload }
    default:
      return { ...state }
  }
}
