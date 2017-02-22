import React from 'react'
import {Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import NewSplit from './components/NewSplit'
import Splits from './components/Splits'
import ExcerciseList from './components/ExcerciseList'

export default (
    <Router history = {history}>
        <Route path="/" component = {App}>
            <IndexRedirect to="/newsplit"/>
            <Route path="/newsplit" component = {NewSplit}>
            </Route>
            <Route path="/splits" component = {Splits}>
            </Route>
            <Route path="/excercises" component = {ExcerciseList}>
            </Route>
        </Route>
    </Router>
)
