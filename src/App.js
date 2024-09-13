import {Route, Switch, Redirect} from 'react-router-dom'

import MainOne from './components/MainOne'

import RegisterOne from './components/RegisterOne'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={MainOne} />

    <Route exact path="/register" component={RegisterOne} />
  </Switch>
)

export default App
