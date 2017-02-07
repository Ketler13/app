import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'

export default function NewSplitDetails(props) {
    if (!props.selected || !props.selected.length) return null
    const detailItems = props.selected.map(sel => {
        return (
            <li key = {sel.value}>
                <p>{sel.label}</p>
                <DetailForm countOfDetails = {props.countOfDetails}/>
                <input type="button" name = {sel.label} value = "+" onClick={props.handleDetail} />
                <input type="button" name = {sel.label} value = "-" onClick={props.handleDetail} />
            </li>
        )
    })
    return (
        <ul>{detailItems}</ul>
    )
}
