import React from 'react'
import { IMG_BASE_URL } from '../../../services'
import Rating from '../Rating'

export default function DiscoverMoviesSelection(props) {
  const movie = props.movie
  let genres = ''
  function genreDisplay() {
    movie.genres.filter((genre, i) => {
      if (i === movie.genres.length - 1) {
        return (genres = genres.concat(`${genre}`))
      } else if (i === movie.genres.length - 2 && i === 0) {
        return (genres = genres.concat(`${genre} & `))
      } else if (i === movie.genres.length - 2 && i > 0) {
        return (genres = genres.concat(`${genre}, & `))
      } else {
        return (genres = genres.concat(`${genre}, `))
      }
    })
  }
  function overviewDisplay() {
    if (movie.overview === '') {
      return ''
    } else {
      return (
        <p>
          <b>Overview:</b> {movie.overview}
        </p>
      )
    }
  }
  function languageDisplay() {
    if (movie.original_language === 'en') {
      return 'English'
    } else if (movie.original_language === 'es') {
      return 'Español'
    } else if (movie.original_language === 'fr') {
      return 'Français'
    } else {
      return 'Unspecified'
    }
  }
  genreDisplay()
  return (
    <section className="selection">
      <h2>Movie Info</h2>
      <div className="selectionDisplay">
        <div className="selectionImage">
          <img
            src={IMG_BASE_URL + movie.poster_path}
            alt={`${movie.original_title} poster`}
          />
        </div>
        <div className="selectionInfo">
          <p>
            <b>Language:</b> {languageDisplay()}
          </p>
          <p>
            <b>Release Date:</b> {movie.release_date}
          </p>
          <p>
            <b>Genre(s):</b> {genres}
          </p>
          {overviewDisplay()}
          <Rating title={movie.original_title} />
        </div>
      </div>
    </section>
  )
}
