import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/">TMDB ReThunk</NavLink>
    </nav>
  )
}
