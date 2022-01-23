import { Link } from 'react-router-dom'

export default function HomeNav() {
  return (
    <section className="navList">
      <div className="navItem">
        <Link to="/movies/discover">Discover New Movies</Link>
      </div>
      <div className="navItem">
        <Link to="/shows/discover">Discover New Shows</Link>
      </div>
    </section>
  )
}
