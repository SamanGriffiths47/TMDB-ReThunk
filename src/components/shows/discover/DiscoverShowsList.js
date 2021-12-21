import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ TVState }) => {
  return {
    TVState
  }
}

const DiscoverShowsList = (props) => {
  console.log(props.TVState)
  return (
    <section className="list">
      <h2>List</h2>
      <p>(scroll for more titles)</p>
      <div className="listDisplay">
        {props.TVState.discoverShows.map((show) => (
          <div key={show.id} className="listItem">
            <Link to={`/shows/discover/${show.name}`}>
              <h3>{show.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default connect(mapStateToProps)(DiscoverShowsList)
