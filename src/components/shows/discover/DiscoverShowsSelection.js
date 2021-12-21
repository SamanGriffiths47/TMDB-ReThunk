import React from 'react'
import { IMG_BASE_URL } from '../../../services'
import Rating from '../Rating'

export default function DiscoverShowsSelection(props) {
  const show = props.show
  function genreDisplay() {
    let genres = ''
    if (show.genres) {
      show.genres.forEach((genre, i) => {
        if (genre.includes(' & ')) {
          const ge = genre.split(' & ')
          show.genres.push(ge[0])
          show.genres.push(ge[1])
          show.genres.splice(i, 1)
        }
      })
      show.genres.filter((genre, i) => {
        if (i === show.genres.length - 1) {
          return (genres = genres.concat(`${genre}`))
        } else if (i === show.genres.length - 2 && i === 0) {
          return (genres = genres.concat(`${genre} & `))
        } else if (i === show.genres.length - 2 && i > 0) {
          return (genres = genres.concat(`${genre}, & `))
        } else {
          return (genres = genres.concat(`${genre}, `))
        }
      })
      return (
        <p>
          <b>Genre(s):</b> {genres}
        </p>
      )
    }
  }
  function overviewDisplay() {
    if (show.overview === '') {
      return ''
    } else {
      return (
        <p>
          <b>Overview:</b> {show.overview}
        </p>
      )
    }
  }
  function languageDisplay() {
    if (show.original_language === 'en') {
      return 'English'
    } else if (show.original_language === 'es') {
      return 'Español'
    } else if (show.original_language === 'fr') {
      return 'Français'
    } else {
      return 'Unspecified'
    }
  }
  genreDisplay()
  return (
    <section className="selection">
      <h2>Show Info</h2>
      <div className="selectionDisplay">
        <div className="selectionImage">
          <img
            src={IMG_BASE_URL + show.poster_path}
            alt={`${show.name} poster`}
          />
        </div>
        <div className="selectionInfo">
          <p>
            <b>Language:</b> {languageDisplay()}
          </p>
          <p>
            <b>First Aired:</b> {show.first_air_date}
          </p>
          {genreDisplay()}
          {overviewDisplay()}
          <Rating title={show.original_name} />
        </div>
      </div>
    </section>
  )
}
