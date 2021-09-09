import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { IMG_BASE_URL } from '../services'

const mapStateToProps = ({ movieState }) => {
  return {
    movieState
  }
}

const Selections = (props) => {
  const selection = props.movieState.selection
  return (
    <div>
      <h1>{selection.title}</h1>
      <img src={IMG_BASE_URL + selection.poster_path} />
      <p>{selection.overview}</p>
    </div>
  )
}

export default connect(mapStateToProps)(Selections)
