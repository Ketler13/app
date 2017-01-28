import React, { Component, PropTypes } from 'react'
import { excercises } from '../fixtures'
import Excercise from './Excercise'

export default class ExcerciseList extends Component {
    state = {
        openExcerciseId: null
    }

    render() {
        const { excercises } = this.props
        const excerciseElements = excercises.map(excercise => {
            return (
                 <li key = {excercise.id}>
                    <Excercise
                        excercise = {excercise}
                        isOpen = {this.state.openExcerciseId === excercise.id}
                        onClick = {this.toggleOpenExcercise(excercise.id)}
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

    toggleOpenExcercise = id => ev => {
        ev && ev.preventDeafult && ev.preventDeafult()
        this.setState({
            openExcerciseId: id
        })
    }
}
