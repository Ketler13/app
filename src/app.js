import React from 'react'
import ReactDOM from 'react-dom'
import ExcerciseList from './components/ExcerciseList'
import { excercises } from './fixtures'

ReactDOM.render(<ExcerciseList excercises = {excercises} />, document.getElementById('container'))
