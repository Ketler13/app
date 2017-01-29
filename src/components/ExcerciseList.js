import React, { Component, PropTypes } from 'react'
import { excercises } from '../fixtures'
import Excercise from './Excercise'
import accordion from '../decorators/accordion'

class ExcerciseList extends Component {
    render() {
        const { excercises } = this.props
        const excerciseElements = excercises.map(excercise => {
            return (
                 <li key = {excercise.id}>
                    <Excercise
                        excercise = {excercise}
                        isOpen = {this.props.openExcerciseId === excercise.id}
                        onClick = {this.props.toggleOpenExcercise(excercise.id)}
                    />
                </li>
            )
        })
        return (
            <div>
                <h2>Excercise list</h2>
                <ul>{excerciseElements}</ul>
            </div>
        )
    }
}

export default accordion(ExcerciseList)
