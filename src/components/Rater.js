import React, { Component, PropTypes } from 'react'
import FaStar from 'react-icons/lib/fa/star'
import FaStarO from 'react-icons/lib/fa/star-o'

function Rater(props) {
    let { rate, handleRate } = props
    let starRate
    if (handleRate) {
        starRate = ["","","","",""].map( (_, index) => {
            return (
                <span onClick = {props.handleRate(index + 1)} key = {index}>
                    {((index + 1) <= props.rate) ? <FaStar/> : <FaStarO />}
                </span>
               )
        })
    } else {
        if ( !rate || (rate < 1) ) rate = 1
        if ( rate > 5) rate = 5

        starRate = ["","","","",""].map( (_, index) => {
            return (
                <span key = {index}>
                    {((index + 1) <= rate) ? <FaStar/> : <FaStarO />}
                </span>
               )
        })
    }


    return <p className = "rater">{starRate}</p>
}

Rater.propTypes = {
    rate: PropTypes.number,
    handleRate: PropTypes.func
}

export default Rater
