import React, { PropTypes } from 'react'
import ExcerciseList from './ExcerciseList'
import Filter from './Filters'
import Diary from './Diary'

function AppContainer(props) {
    return (
        <div>
            <Filter excercises = {[]}/>
            <ExcerciseList/>
            <Diary/>
        </div>
    )
}

export default AppContainer
