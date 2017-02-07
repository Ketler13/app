import React, { Component, PropTypes } from 'react'

export default function DetailForm(props) {
    if (!props.countOfDetails || !props.countOfDetails.length) return null
    const detailForms = props.countOfDetails.map(det => {
        return (
            <div key = {Math.random()}>
                <p>Weight: <input type="number" /></p>
                <p>Times: <input type="number" /></p>
            </div>
        )
    })
    return (
        <div>
        {detailForms}
        </div>
    )
}
