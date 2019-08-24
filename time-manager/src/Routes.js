import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Current from "./pages/current"
import Stopwatch from "./pages/stopwatch"
import Todo from "./pages/todo"
import ErrorComponent from "./pages/errorPage"
import { createBrowserHistory } from "history"
const browserHistory = createBrowserHistory()
function Routes() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Current} />
        <Route path="/stopwatch" component={Stopwatch} />
        <Route path="/Todo" component={Todo} />
        {/* when none of the above match, <ErrorComponent> will be rendered */}
        <Route component={ErrorComponent} />
      </Switch>
    </Router>
  )
}

export default Routes
