import { GetMovies } from '../../services/MovieServices'
import { GET_MOVIES, GET_SELECTION } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      dispatch({ type: GET_MOVIES, payload: movies })
    } catch (error) {
      throw error
    }
  }
}

export const GetSelection = (selection) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SELECTION, payload: selection })
    } catch (error) {
      error
    }
  }
}
