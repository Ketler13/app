import React, { Component, PropTypes } from 'react'
import { excercises } from '../fixtures'
import Excercise from './Excercise'
import Filter from './Filters'
import { deleteExcercise } from '../AC'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'

class ExcerciseList extends Component {
    static PropTypes = {
        excercises: PropTypes.array.isRequired,
        isOpenItem: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { excercises } = this.props
        const excerciseElements = excercises.map(excercise => {
            return (
                 <li key = {excercise.id}>
                    <Excercise
                        excercise = {excercise}
                        isOpen = {this.props.isOpen(excercise.id)}
                        onClick = {this.props.toggleOpenItem(excercise.id)}
                        deleteExcercise = {this.props.deleteExcercise}
                    />
                </li>
            )
        })
        return (
            <div className = "excercises">
                <h2>Excercise list</h2>
                <Filter/>
                <ul>{excerciseElements}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    const excercises = mapToArray(state.excercises)
    const { filters } = state
    const {selected} = filters
    const { from, to } = filters.dateRange

    const filteredExcercises = excercises.filter(excercise => {
        const published = Date.parse(excercise.date)
        return (!selected.length || selected.includes(excercise.id)) &&
            (!from || !to || (published > from && published < to))
    })
    return {
        excercises: filteredExcercises
    }
}, {deleteExcercise})(accordion(ExcerciseList))
