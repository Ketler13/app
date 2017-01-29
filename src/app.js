import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/AppContainer'
import { excercises } from './fixtures'

ReactDOM.render(<AppContainer excercises = {excercises} />, document.getElementById('container'))
