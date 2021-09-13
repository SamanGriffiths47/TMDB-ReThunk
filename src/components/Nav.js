import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/movies">TV Shows</NavLink>
    </nav>
  )
}
