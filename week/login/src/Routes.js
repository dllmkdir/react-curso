import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Login from './pages/login'
import Contact from './pages/contact'
import About from './pages/about'
const browserHistory = createBrowserHistory()
function Routes() {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                {/* <Route component={ErrorComponent} /> */}
            </Switch>
        </Router>
    )
}
export default Routes
