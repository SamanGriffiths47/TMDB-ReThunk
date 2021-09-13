import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ movieState }) => {
  return {
    movieState
  }
}

const DiscoverMoviesList = (props) => {
  return (
    <section className="list">
      <h2>List</h2>
      <p>(scroll for more titles)</p>
      <div className="listDisplay">
        {props.movieState.discoverMovies.map((movie) => (
          <div key={movie.id} className="listItem">
            <Link to={`/movies/discover/${movie.original_title}`}>
              <h3>{movie.original_title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default connect(mapStateToProps)(DiscoverMoviesList)
