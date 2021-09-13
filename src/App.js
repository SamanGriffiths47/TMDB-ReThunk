import { Route } from 'react-router'
import { connect } from 'react-redux'
import './styles/App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import { LoadDiscoverMovies } from './store/actions/MovieActions'
import { useEffect } from 'react'
import MovieRoutes from './pages/movies/MovieRoutes'
import DiscoverMovies from './pages/movies/DiscoverMovies'
import DiscoverMoviesSelection from './components/movies/discover/DiscoverMoviesSelection'

const mapStateToProps = ({ movieState }) => {
  return {
    movieState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiscoverMovies: () => dispatch(LoadDiscoverMovies())
  }
}

function App(props) {
  useEffect(() => {
    props.fetchDiscoverMovies()
  }, [])

  return (
    <div className="App">
      <Nav />
      <h1>TMDB ReThunk</h1>
      <main>
        <Route exact path="/" render={(...props) => <Home {...props} />} />
        <Route
          exact
          path="/movies"
          render={(...props) => <MovieRoutes {...props} />}
        />
        <Route
          path="/movies/discover"
          render={(...props) => <DiscoverMovies {...props} />}
        />
        {props.movieState.discoverMovies.map((movie) => (
          <Route
            exact
            path={`/movies/discover/${movie.original_title}`}
            key={movie.id}
            render={(...props) => (
              <DiscoverMoviesSelection {...props} movie={movie} />
            )}
          />
        ))}
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
