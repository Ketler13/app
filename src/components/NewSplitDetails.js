import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'
import { handleSetsInNewSplit } from '../AC/newSplitAC'
import { connect } from 'react-redux'

function NewSplitDetails(props) {
    /*
        selected, countOfDetails arrive from reducer
    */
    const { selected, countOfDetails, handleDetail, handleSetsInNewSplit } = props
    if (!selected || !selected.length) return null
    /*
        detailItems creates for every selected excercise list of inputs (kg, times)
    */
    const detailItems = props.selected.map(sel => {
        return (
            <li key = {sel.value}>
                <p>{sel.label}</p>
                <DetailForm
                    countOfDetails = {countOfDetails.get(sel.label)}
                    currentExcercise = {sel.label}
                    handleSetsInNewSplit = {handleSetsInNewSplit}
                />
                <input type="button" name = {sel.label} value = "+" onClick={handleDetail} />
                <input type="button" name = {sel.label} value = "-" onClick={handleDetail} />
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
}, {handleSetsInNewSplit})(NewSplitDetails)
