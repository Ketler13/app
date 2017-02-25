import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'
import Paper from 'material-ui/Paper'

function NewSplitDetails(props) {
    /*
        selected, countOfDetails arrive from reducer
    */
    const { selected, addSetInNewSplit } = props
    const style = {
        display: 'block',
        maxWidth: '220px',
        margin: '10px',
    }
    if (!selected || !selected.length) return null
    /*
        detailItems creates for every selected excercise list of inputs (kg, times)
    */
    const detailItems = props.selected.map(sel => {
        return (
            <Paper key = {sel.value} style = {style} zDepth={5}>
                <p>{sel.label}</p>
                <DetailForm
                    currentExcercise = {sel.label}
                    excerciseId = {sel.value}
                    addSetInNewSplit = {addSetInNewSplit}
                />
            </Paper>
        )
    })
    return (
        <div className = "details">{detailItems}</div>
    )
}

export default NewSplitDetails
