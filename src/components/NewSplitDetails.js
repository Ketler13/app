import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'
import { addSetInNewSplit } from '../AC/newSplitAC'
import { connect } from 'react-redux'

function NewSplitDetails(props) {
    /*
        selected, countOfDetails arrive from reducer
    */
    const { selected, addSetInNewSplit } = props
    if (!selected || !selected.length) return null
    /*
        detailItems creates for every selected excercise list of inputs (kg, times)
    */
    const detailItems = props.selected.map(sel => {
        return (
            <li key = {sel.value}>
                <p>{sel.label}</p>
                <DetailForm
                    currentExcercise = {sel.label}
                    addSetInNewSplit = {addSetInNewSplit}
                />
            </li>
        )
    })
    return (
        <ul>{detailItems}</ul>
    )
}

export default connect((state) => {
    return {
        sets: state.newSplitState.sets
    }
}, {addSetInNewSplit})(NewSplitDetails)
