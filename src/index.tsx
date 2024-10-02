/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import './App.css'
import App from './App'
import 'virtual:uno.css'
import { Route, Router } from '@solidjs/router'

import BlessingView from './views/BlessingView'
import EquationView from './views/EquationView'
import Home from './views/Home'

const root = document.getElementById('root')

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/blessings" component={BlessingView} />
      <Route path="/equations" component={EquationView} />
    </Router>
  ),
  root!,
)
