import React, { PropTypes } from 'react'
import Chip from 'material-ui/Chip';

function NewSplitTooltip(props) {
    const tooltips = props.newSplitExcercises.map(excercise => {
        const sets = excercise.sets.join(' ')
        return (
            <Chip
                key = {excercise.id}
                onRequestDelete={props.deleteTooltip(excercise.name)}
                style = {{
                    margin: '4px',
                }}
            >
                {excercise.name}: {sets}
            </Chip>
        )
    })
    return <div className = 'tooltipWrapper'>{tooltips}</div>
}

NewSplitTooltip.propTypes = {
    newSplitExcercises: PropTypes.array.isRequired,
    deleteTooltip: PropTypes.func.isRequired
}

export default NewSplitTooltip
