import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Split from './Split'
import NewSplit from './NewSplit'
import {addSplit} from '../AC'
import { mapToArray } from '../helpers'

class Diary extends Component {
    render() {
        const { diary, addSplit, excercises} = this.props
        const splits = diary.map(split => {
            return (
                <li key = {split.id}>
                    <Split
                        date = {split.date}
                        excercises = {split.excercises}
                        mark = {split.mark}
                    />
                </li>
            )
        })
        return (
            <div>
                <h2>Your diary</h2>
                <NewSplit addSplit = {addSplit} excercises = {excercises}/>
                <ul>{splits}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        diary: mapToArray(state.diary),
        excercises: mapToArray(state.excercises)
    }
}, {addSplit})(Diary)
