import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import Home from './pages/Home'
import './styles/App.css'
import Selections from './pages/Selections'

const mapStateToProps = ({ movieState }) => {
  return {
    movieState
  }
}

function App(props) {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path={`/movies/${props.movieState.selection.title}`}
            component={Selections}
          />
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps)(App)
