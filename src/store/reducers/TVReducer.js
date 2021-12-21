const { SAVE_SHOW_RATING, GET_SHOWS } = require('../types')

const iState = {
  discoverShows: [],
  showRatings: {}
}

export default function TVReducer(state = iState, action) {
  switch (action.type) {
    case GET_SHOWS:
      return { ...state, discoverShows: action.payload }
    case SAVE_SHOW_RATING:
      return {
        ...state,
        showRatings: {
          ...state.showRatings,
          [action.payload[0]]: [action.payload[1]]
        }
      }
    default:
      return { ...state }
  }
}
