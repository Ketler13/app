import React, {Component} from 'react'
import Rater from './Rater'
import toggleOpen from '../decorators/toggleOpen'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'

class Split extends Component {
    addRate = (id, rate) => ev => {
        this.props.addRate(id, rate)
    }

    deleteSplit = id => ev => {
      this.props.deleteSplit(id)
    }

    getBody = () => {
        const style = {
          container: {
            position: 'relative',
          },
          iconButton: {
            display: 'block',
            position: 'absolute',
            top: '-35px',
            right: '0px',
          }
        }
        const excercises = this.props.excercises.map(exc => {
            const sets = exc.sets.map((set, i) => {
                return (
                    <td key = {i} className = "set">
                        <span>{set}</span>
                    </td>
                )
            })
            return (
                <tr key = {exc.id || exc._id}>
                    <th>{exc.name}</th>
                    {sets}
                </tr>
            )
        })
        if (!this.props.isOpen) return null
        return (
            <div style = {style.container}>
              <IconButton
                  onTouchTap = {this.deleteSplit(this.props.splitId)}
                  style = {style.iconButton}
              >
                  <ContentClear/>
              </IconButton>
                <table>
                    <tbody>{excercises}</tbody>
                </table>
                <Rater
                    splitId = {this.props.splitId}
                    rate = {Number(this.props.mark)}
                    addRate = {this.addRate}

                />
            </div>
        )
    }

    render() {
        const { isOpen, date, toggleOpen} = this.props

        return (
            <div>
                <p onClick={toggleOpen}>{String(date)}</p>
                {this.getBody()}
            </div>
        )
    }
}

export default toggleOpen(Split)
