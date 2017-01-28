import React, { Component, PropTypes } from 'react'
import MediaLinkList from './MediaLinkList'
import toggleOpen from '../decorators/toggleOpen'

class Excercise extends Component {
    render() {
        const { excercise } = this.props
        return (
            <div>
                <h3 onClick = {this.props.toggleOpen}>{excercise.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody = () => {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.excercise.text}
                <MediaLinkList comments = {this.props.excercise.comments} />
            </section>
        )
    }
}

export default toggleOpen(Excercise)
