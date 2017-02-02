import React, { Component, PropTypes } from 'react'
import MediaLinkList from './MediaLinkList'

export default class Excercise extends Component {
    render() {
        const { excercise, onClick, handleDelete } = this.props
        return (
            <div>
                <h3 onClick = {onClick}>{excercise.title}</h3>
                <a href="#" onClick = {this.handleDelete(excercise.id)}>delete excercise</a>
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

    handleDelete = id => ev => {
        ev.preventDefault()
        this.props.deleteExcercise(id)
    }
}
