import React, { PropTypes } from 'react'

export default function Menu(props) {
    return (
            <div>
                <ul className = "menu">
                    {props.children}
                </ul>
            </div>
        )
}
