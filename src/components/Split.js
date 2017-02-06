import React from 'react'

export default function Split(props) {
    const excercises = props.excercises.map(exc => {
        return (
            <li key = {exc.id}>
                {exc.name}
            </li>
        )
    })

    return (
        <div>
            <p>{props.date}</p>
            <ul>{excercises}</ul>
            <p>{props.mark}</p>
        </div>
    )
}
