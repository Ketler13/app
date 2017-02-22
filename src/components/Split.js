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
            const sets = exc.sets.map((set, i) => {
                return (
                    <td key = {i}>
                        <span>{set}</span>
                    </td>
                )
            })
            return (
                <tr key = {exc.id}>
                    <th>{exc.name}</th>
                    {sets}
                </tr>
            )
        })
        if (!this.props.isOpen) return null
        return (
            <div>
                <table>
                    <tbody>{excercises}</tbody>
                </table>
                <Rater rate = {Number(this.props.mark)}/>
            </div>
        )
    }
}

export default toggleOpen(Split)
