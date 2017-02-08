import React, { PropTypes } from 'react'
import ExcerciseList from './ExcerciseList'
import Diary from './Diary'

function AppContainer(props) {
    return (
        <div>
            <Diary/>
            <ExcerciseList/>
        </div>
    )
}

export default AppContainer
