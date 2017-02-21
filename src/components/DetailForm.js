import React, { Component, PropTypes } from 'react'
import FormOfOneSet from './FormOfOneSet'

export default function DetailForm(props) {
    const { countOfDetails, currentExcercise } = props
    if (!countOfDetails || !countOfDetails.length) return null
    const detailForms = countOfDetails.map((det, i) => {
        return (
            <li key = {i}>
                <FormOfOneSet
                    currentExcercise = {currentExcercise}
                    numberOfSet = {i}
                    handleSetsInNewSplit = {props.handleSetsInNewSplit}
                />
            </li>
        )
    })
    return (
        <ul>
            {detailForms}
        </ul>
    )
}
