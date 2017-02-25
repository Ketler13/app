import React, { Component, PropTypes } from 'react'
import FaClose from 'react-icons/lib/fa/close'
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux'
import { deleteExcerciseFromNewSplit } from '../AC/newSplitAC'

class NewSplitTooltip extends Component {
    render() {
        const tooltips = this.props.newSplitExcercises.map(excercise => {
            const sets = excercise.sets.join(' ')
            return (
                <Chip
                    key = {excercise.id}
                    onRequestDelete={this.deleteTooltip(excercise.name)}
                    style = {{
                        margin: '4px',
                    }}
                >
                    {excercise.name}: {sets}
                </Chip>
            )
        })
        if (!tooltips || !tooltips.length) return null
        return <div className = 'tooltipWrapper'>{tooltips}</div>
    }

    deleteTooltip = name => () => {
        this.props.deleteExcerciseFromNewSplit(String(name))
    }
}

export default connect(null, {deleteExcerciseFromNewSplit})(NewSplitTooltip)
