import React from 'react';

import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

import Header from './components/layout/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ({ history, context }) => {
  return (
    <ConnectedRouter history={history} context={context}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => (<div>Match</div>)} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </ConnectedRouter>
  )
}

export default App;
