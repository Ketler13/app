import React from 'react'

export default function Split(props) {
    return (
        <div>
            <p>{props.date}</p>
            <p>{props.excercises}</p>
            <p>{props.mark}</p>
        </div>
    )
}
