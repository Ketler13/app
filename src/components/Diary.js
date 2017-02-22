import React, { Component, PropTypes } from 'react'
import NewSplit from './NewSplit'
import Splits from './Splits'

function Diary(props) {
    const { excercises } = props
    return (
        <div>
            <NewSplit />
            <Splits />
        </div>
    )
}

export default Diary
