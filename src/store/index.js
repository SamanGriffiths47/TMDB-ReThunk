import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducers'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    movieState: MovieReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
