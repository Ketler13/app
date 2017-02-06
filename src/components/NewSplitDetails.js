import React, { Component, PropTypes } from 'react'

export default function NewSplitDetails(props) {
    if (!props.selected || !props.selected.length) return null
    const detailItems = props.selected.map(sel => {
        return (
            <li key = {sel.value}>
                <p>{sel.label}</p>
                <p>Weight: <input type="number" /></p>
                <p>Times: <input type="number" /></p>
            </li>
        )
    })
    return (
        <ul>{detailItems}</ul>
    )
}
