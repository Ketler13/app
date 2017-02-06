import React, { Component, PropTypes } from 'react'

export default function MediaLink(props) {
    const { comment } = props
    return (
        <div>
            <h4>{comment.user}</h4>
            <a href={comment.text}>{comment.text}</a>
        </div>
    )
}
