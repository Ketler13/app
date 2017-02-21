import React, { PropTypes } from 'react'

export default function NewSplitTooltip(props) {
    const tooltips = props.newSplitExcercises.map(excercise => {
        const sets = excercise.sets.join('')
        return (
            <span key = {excercise.id}>
                {excercise.name}: {sets}
            </span>
        )
    })
    if (!tooltips || !tooltips.length) return null
    return <p>{tooltips}</p>
}
