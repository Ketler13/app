import React, { Component, PropTypes } from 'react'
import { excercises } from '../fixtures'
import Excercise from './Excercise'

export default class ExcerciseList extends Component {
    render() {
        const { excercises } = this.props
        const excerciseElements = excercises.map(excercise => {
            return (
                 <li key = {excercise.id}>
                    <Excercise  excercise = {excercise}/>
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
