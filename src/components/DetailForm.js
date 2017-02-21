import React, { Component, PropTypes } from 'react'
import FormOfOneSet from './FormOfOneSet'

export default function DetailForm(props) {
    const { currentExcercise, excerciseId } = props
    return (
        <FormOfOneSet
            currentExcercise = {currentExcercise}
            excerciseId = {excerciseId}
            addSetInNewSplit = {props.addSetInNewSplit}
        />
    )
}
