import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import Detail from 'pages/Detail'
import NavBar from 'components/NavBar'
import NotFound from 'pages/NotFound'

export default function Routes() {
  return (
    <Router>
      <NavBar />

      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/character/:id' component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
