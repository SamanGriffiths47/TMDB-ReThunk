import tmdb from '../tmdb.png'

export function HomeDisplay(props) {
  return (
    <section className="selection">
      <div id="defaultDisplay">
        <img src={tmdb} alt="TMDB Logo" />
      </div>
    </section>
  )
}
