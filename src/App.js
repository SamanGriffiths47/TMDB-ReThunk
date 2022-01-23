import { Route } from 'react-router'
import { connect } from 'react-redux'
import './styles/App.css'
import Nav from './components/Nav'
import HomeNav from './pages/HomeNav'
import { LoadDiscoverMovies } from './store/actions/MovieActions'
import { useEffect } from 'react'
import DiscoverMovies from './pages/movies/DiscoverMovies'
import DiscoverMoviesSelection from './components/movies/discover/DiscoverMoviesSelection'
import { LoadDiscoverShows } from './store/actions/TVShowActions'
import DiscoverShows from './pages/shows/DiscoverShows'
import DiscoverShowsSelection from './components/shows/discover/DiscoverShowsSelection'
import { HomeDisplay } from './pages/HomeDisplay'

const mapStateToProps = ({ movieState, TVState }) => {
  return {
    movieState,
    TVState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiscoverMovies: () => dispatch(LoadDiscoverMovies()),
    fetchDiscoverShows: () => dispatch(LoadDiscoverShows())
  }
}

function App(props) {
  useEffect(() => {
    props.fetchDiscoverMovies()
    props.fetchDiscoverShows()
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Route exact path="/" render={(...props) => <HomeNav {...props} />} />

        <Route
          exact
          path="/"
          render={(...props) => <HomeDisplay {...props} />}
        />

        <Route
          exact
          path="/:category/discover"
          render={(...props) => <HomeDisplay {...props} />}
        />

        <Route
          path="/movies/discover"
          render={(...props) => <DiscoverMovies {...props} />}
        />

        {props.movieState.discoverMovies.map((movie) => (
          <Route
            exact
            path={`/movies/discover/${movie.title}`}
            key={movie.id}
            render={(...props) => (
              <DiscoverMoviesSelection {...props} movie={movie} />
            )}
          />
        ))}

        <Route
          path="/shows/discover"
          render={(...props) => <DiscoverShows {...props} />}
        />

        {props.TVState.discoverShows.map((show) => (
          <Route
            exact
            path={`/shows/discover/${show.name}`}
            key={show.id}
            render={(...props) => (
              <DiscoverShowsSelection {...props} show={show} />
            )}
          />
        ))}
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
