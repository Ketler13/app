import React, { Component, PropTypes } from 'react'
import MediaLink from './MediaLink'
import toggleOpen from '../decorators/toggleOpen'

class MediaLinkList extends Component {
    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink = () => {
        return (
            <a href='#' onClick = {this.props.toggleOpen}>
                {this.props.isOpen ? 'hide' : 'show'} media
            </a>
        )
    }

    getBody = () => {
        if (!this.props.isOpen) return null
        const { comments } = this.props
        if (!comments || !comments.length) return <div>No links yet</div>
        const mediaItems = comments.map(comment => {
            return (
                <li key = {comment.id}><MediaLink comment = {comment} /></li>
            )
        })
        return (
            <ul>{mediaItems}</ul>
        )
    }
}

export default toggleOpen(MediaLinkList)
