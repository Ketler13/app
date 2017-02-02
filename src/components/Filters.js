import React, { Component, PropTypes } from 'react'
import ExcerciseSelect from './ExcerciseSelect'
import DateRange from './DateRange'

class Filters extends Component {
    static propTypes = {
        excercises: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <ExcerciseSelect excercises = {this.props.excercises}/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters
