import React, {Component} from 'react'
import Rater from './Rater'
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
                    {exc.name + ' sets: ' + exc.sets}
                </li>
            )
        })
        if (!this.props.isOpen) return null
        return (
            <div>
                <ul>{excercises}</ul>
                <Rater rate = {Number(this.props.mark)}/>
            </div>
        )
    }
}

export default toggleOpen(Split)
