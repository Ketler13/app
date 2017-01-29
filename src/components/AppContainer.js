import React, { PropTypes } from 'react'
import ExcerciseList from './ExcerciseList'

function AppContainer(props) {
    return (
        <div>
            <ExcerciseList excercises = {props.excercises} />
        </div>
    )
}

export default AppContainer
