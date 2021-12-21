import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieMethods() {
  return (
    <section className="list">
      <div className="listItem">
        <Link to="/movies/discover">Discover New Movies</Link>
      </div>
    </section>
  )
}
