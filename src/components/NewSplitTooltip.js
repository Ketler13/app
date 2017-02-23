import React, { Component, PropTypes } from 'react'
import FaClose from 'react-icons/lib/fa/close'
import { connect } from 'react-redux'
import { deleteExcerciseFromNewSplit } from '../AC/newSplitAC'

class NewSplitTooltip extends Component {
    render() {
        const tooltips = this.props.newSplitExcercises.map(excercise => {
            const sets = excercise.sets.join(' ')
            return (
                <span className = "newSplitTooltip" key = {excercise.id}>
                    {excercise.name}: {sets}
                    <span onClick = {this.deleteTooltip(excercise.name)}><FaClose/></span>
                </span>
            )
        })
        if (!tooltips || !tooltips.length) return null
        return <p>{tooltips}</p>
    }

    deleteTooltip = name => () => {
        this.props.deleteExcerciseFromNewSplit(String(name))
    }
}

export default connect(null, {deleteExcerciseFromNewSplit})(NewSplitTooltip)
