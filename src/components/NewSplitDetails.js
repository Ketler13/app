import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'

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
            <li className = "detailItem" key = {sel.value}>
                <p>{sel.label}</p>
                <DetailForm
                    currentExcercise = {sel.label}
                    excerciseId = {sel.value}
                    addSetInNewSplit = {addSetInNewSplit}
                />
            </li>
        )
    })
    return (
        <ul className = "details">{detailItems}</ul>
    )
}

export default NewSplitDetails
