import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'

function NewSplitDetails(props) {
    /*
        selected, countOfDetails arrive from reducer
    */
    const { selected, addSetInNewSplit } = props
    const style = {
        display: 'block',
        width: '300px',
        margin: '10px',
        padding: '20px',
    }
    if (!selected || !selected.length) return null
    /*
        detailItems creates for every selected excercise list of inputs (kg, times)
    */
    const detailItems = props.selected.map(sel => {
        return (
            <Paper key = {sel.value} style = {style} zDepth={5}>
                <div style = {{position: 'relative',}}>
                    <IconButton
                        onTouchTap = {props.closeSplitDetail(sel.label)}
                        style = {{
                            display: 'block',
                            position: 'absolute',
                            top: '-20px',
                            left: '230px',
                        }}
                    >
                        <ContentClear />
                    </IconButton>
                    <p>{sel.label}</p>
                </div>
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
