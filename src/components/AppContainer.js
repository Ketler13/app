import React, { PropTypes } from 'react'
import ExcerciseList from './ExcerciseList'
import Filter from './Filters'

function AppContainer(props) {
    return (
        <div>
            <Filter excercises = {[]}/>
            <ExcerciseList/>
        </div>
    )
}

export default AppContainer
