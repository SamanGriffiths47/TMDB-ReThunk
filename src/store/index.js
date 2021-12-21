import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import TVReducer from './reducers/TVReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    TVState: TVReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
