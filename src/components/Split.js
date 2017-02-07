import React, {Component} from 'react'
import toggleOpen from '../decorators/toggleOpen'

class Split extends Component {
    render() {
        const { isOpen, date, toggleOpen} = this.props

        return (
            <div>
                <p onClick={toggleOpen}>{date}</p>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const excercises = this.props.excercises.map(exc => {
            return (
                <li key = {exc.id}>
                    {exc.name}
                </li>
            )
        })
        if (!this.props.isOpen) return null
        return (
            <div>
                <ul>{excercises}</ul>
                <p>{this.props.mark}</p>
            </div>
        )
    }
}

export default toggleOpen(Split)
