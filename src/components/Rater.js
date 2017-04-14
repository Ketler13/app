import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border'
import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'

function Rater(props) {
    const { splitId, rate, addRate } = props
    const starRate = ["","","","",""].map( (_, index) => {
        const isChecked = ((index + 1) <= rate) ? true : false
        return (
            <li key = {index}>
                <Checkbox
                    checkedIcon={<ToggleStar />}
                    uncheckedIcon={<ToggleStarBorder />}
                    checked = {isChecked}
                    onCheck = {rate ? null : addRate(splitId, index + 1)}
                />
            </li>
           )
    })

    return <ul style = {{display: 'flex', flexDirection: 'row wrap',}}>{starRate}</ul>
}

Rater.propTypes = {
    rate: PropTypes.number.isRequired,
    splitId: PropTypes.string.isRequired,
    addRate: PropTypes.func.isRequired
}

export default Rater
