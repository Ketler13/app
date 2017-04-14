import React, { Component, PropTypes } from 'react'
import Split from './Split'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { loadSplits } from '../AC'
import { addRate } from '../AC/newSplitAC'

class Splits extends Component {
    static propTypes = {
        diary: PropTypes.array.isRequired
    }

    static defaultProps = {
        diary: []
    }

    componentDidMount() {
      this.props.loadSplits();
    }

    render() {
      const { diary } = this.props
      const style = {
          margin: '10px',
          padding: '5px',
      }
      const splits = diary.map(split => {
          return (
              <Paper key = {split.id} style = {style} zDepth={5} className = "splitItem">
                  <Split
                      splitId = {split.id}
                      date = {split.date}
                      excercises = {split.excercises}
                      mark = {split.mark}
                      addRate = {this.props.addRate}
                  />
              </Paper>
          )
      })
      return <div className = "splits">{splits}</div>
    }
}

export default connect((state) => {
    return {
        diary: mapToArray(state.diary)
    }
}, {addRate, loadSplits})(Splits)
