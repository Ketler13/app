import React, { Component, PropTypes } from 'react'

export default function DetailForm(props) {
    const { countOfDetails } = props
    if (!countOfDetails || !countOfDetails.length) return null
    const detailForms = countOfDetails.map((det, i) => {
        return (
            <div key = {i}>
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
