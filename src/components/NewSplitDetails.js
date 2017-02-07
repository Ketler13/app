import React, { Component, PropTypes } from 'react'
import DetailForm from './DetailForm'

export default function NewSplitDetails(props) {
    const { selected, countOfDetails, handleDetail } = props
    if (!selected || !selected.length) return null
    const detailItems = props.selected.map(sel => {
        return (
            <li key = {sel.value}>
                <p>{sel.label}</p>
                <DetailForm
                    countOfDetails = {countOfDetails[sel.label]}
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
