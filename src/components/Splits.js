import React, { Component, PropTypes } from 'react'
import Split from './Split'
import UnloggedPage from './UnloggedPage'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { loadSplits, deleteSplit } from '../AC'
import { addRate } from '../AC/newSplitAC'

class Splits extends Component {
    static propTypes = {
        diary: PropTypes.array.isRequired,
        loadSplits: PropTypes.func,
        userWasLoggedIn: PropTypes.bool.isRequired
    }

    static defaultProps = {
        diary: [],
        userWasLoggedIn: false
    }

    componentWillReceiveProps(nextProps) {
      !this.props.userWasLoggedIn && nextProps.userWasLoggedIn && nextProps.loadSplits(nextProps.userId)
    }

    componentDidMount() {
      this.props.userWasLoggedIn && this.props.loadSplits(this.props.userId)
    }

    render() {
      if (this.props.userWasLoggedIn) {
        const { diary } = this.props
        const style = {
            margin: '10px',
            padding: '5px',
        }
        if (!diary.length) return <div className = "splits">No splits yet</div>
        const splits = diary.map(split => {
            return (
                <Paper key = {split.id} style = {style} zDepth={5} className = "splitItem">
                    <Split
                        splitId = {split.id}
                        date = {split.date}
                        excercises = {split.excercises}
                        mark = {split.mark}
                        addRate = {this.props.addRate}
                        deleteSplit = {this.props.deleteSplit}
                    />
                </Paper>
            )
        })
        return <div className = "splits">{splits}</div>
      } else {
        return <UnloggedPage />
      }
    }
}

export default connect((state) => {
    return {
        diary: mapToArray(state.diary),
        userWasLoggedIn: state.login.userWasLoggedIn,
        userId: state.login.user ? state.login.user.id : null
    }
}, {addRate, loadSplits, deleteSplit})(Splits)
