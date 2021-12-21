import { Link } from 'react-router-dom'

export default function TVMethods() {
  return (
    <section className="list">
      <div className="listItem">
        <Link to="/shows/discover">Discover New Shows</Link>
      </div>
    </section>
  )
}
