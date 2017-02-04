import React, { Component, PropTypes } from 'react'
import MediaLink from './MediaLink'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import NewLinkForm from './NewLinkForm'
import { addLink } from '../AC'

class MediaLinkList extends Component {
    static propTypes = {
        linksIds: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

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
        const { comments, excercise, isOpen, addLink } = this.props
        if (!isOpen) return null
        const form = <NewLinkForm addLink={(link) => addLink(excercise.id, link)} />
        if (!comments || !comments.length) return <div><p>No links yet</p>{form}</div>
        const mediaItems = comments.map(comment => {
            return (
                <li key = {comment.id}><MediaLink comment = {comment} /></li>
            )
        })
        return (
            <div>
                <ul>{mediaItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.linksIds.map(id => storeState.links.get(id))
    }
}, {addLink})(toggleOpen(MediaLinkList))
