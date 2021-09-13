import React from 'react'
import { Link } from 'react-router-dom'
import DiscoverMovies from './DiscoverMovies'
import { Route } from 'react-router'
import MovieMethods from '../../components/movies/MovieMethods'

function MovieRoutes(props) {
  return (
    <div>
      <MovieMethods />
    </div>
  )
}

export default MovieRoutes
