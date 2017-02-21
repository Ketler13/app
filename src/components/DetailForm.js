import React, { Component, PropTypes } from 'react'
import FormOfOneSet from './FormOfOneSet'

export default function DetailForm(props) {
    const { currentExcercise } = props
    return (
        <FormOfOneSet
            currentExcercise = {currentExcercise}
            addSetInNewSplit = {props.addSetInNewSplit}
        />
    )
}
