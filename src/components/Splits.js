import React, { PropTypes } from 'react'
import Split from './Split'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { addRate } from '../AC/newSplitAC'

function Splits(props) {
    const { diary } = props
    const style = {
        margin: '10px',
        padding: '5px',
    }
    const splits = diary.map(split => {
        return (
            <Paper key = {split.id} style = {style} zDepth={5} className = "splitItem">
                <Split
                    splitId = {split.id}
                    date = {split.date}
                    excercises = {split.excercises}
                    mark = {split.mark}
                    addRate = {props.addRate}
                />
            </Paper>
        )
    })
    return <div className = "splits">{splits}</div>

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
}, {addRate})(Splits)
