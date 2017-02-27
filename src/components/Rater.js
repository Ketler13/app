import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border'
import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'

function Rater(props) {
    const { splitId, rate, addRate } = props
    let starRate
    starRate = ["","","","",""].map( (_, index) => {
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

    // if (addRate) {
    //     starRate = ["","","","",""].map( (_, index) => {
    //         return (
    //             <span onClick = {props.handleRate(index + 1)} key = {index}>
    //                 {((index + 1) <= props.rate) ? <FaStar/> : <FaStarO />}
    //             </span>
    //            )
    //     })
    // } else {
    //     if ( !rate || (rate < 1) ) rate = 1
    //     if ( rate > 5) rate = 5
    //
    //     starRate = ["","","","",""].map( (_, index) => {
    //         return (
    //             <span key = {index}>
    //                 {((index + 1) <= rate) ? <FaStar/> : <FaStarO />}
    //             </span>
    //            )
    //     })
    // }


    return <ul style = {{display: 'flex', flexDirection: 'row wrap',}}>{starRate}</ul>
}

Rater.propTypes = {
    rate: PropTypes.number,
    handleRate: PropTypes.func
}

export default Rater
