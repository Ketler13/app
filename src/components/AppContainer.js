import React, { PropTypes } from 'react'
import ExcerciseList from './ExcerciseList'
import Filter from './Filters'
import Diary from './Diary'

function AppContainer(props) {
    return (
        <div>
            <Diary/>
            <Filter excercises = {[]}/>
            <ExcerciseList/>
        </div>
    )
}

export default AppContainer
