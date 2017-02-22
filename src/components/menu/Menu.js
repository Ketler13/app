import React, { PropTypes } from 'react'

export default function Menu(props) {
    return (
            <div>
                <ul>
                    {props.children}
                </ul>
            </div>
        )
}
