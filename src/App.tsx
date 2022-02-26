import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import Add from './pages/Add'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Error from './pages/Error'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/book/:id" component={Detail} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
