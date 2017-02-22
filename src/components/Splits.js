import React, { PropTypes } from 'react'
import Split from './Split'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'

function Splits(props) {
    const { diary } = props
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
            <ul>{splits}</ul>
        </div>
    )
}

Splits.propTypes = {
    diary: PropTypes.array.isRequired
}

Splits.defaultProps = {
    diary: []
}

export default connect((state) => {
    return {
        diary: mapToArray(state.diary)
    }
})(Splits)
