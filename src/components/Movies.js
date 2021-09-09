import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IMG_BASE_URL } from '../services'
import { GetSelection, LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return {
    movieState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies()),
    makeSelection: (selection) => dispatch(GetSelection(selection))
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  const handleClick = (selection) => {
    props.makeSelection(selection)
  }

  return (
    <div>
      {props.movieState.movies.map((movie) => (
        <section key={movie.id}>
          <div>{movie.title}</div>
          <img
            src={`${IMG_BASE_URL + movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <Link to={`/movies/${movie.title}`}>
            <button onClick={() => handleClick(movie)}>Details</button>
          </Link>
        </section>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
