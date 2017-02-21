import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         addSetInNewSplit, addSplit } from '../AC/newSplitAC'

class NewSplit extends Component {
    render() {
        const { excercises, date, selected, addSetInNewSplit } = this.props
        const options = excercises.map(exc => ({
            label: exc.title,
            value: exc.id
        }))
        return (
            <div>
                <h3>Add new split to diary</h3>
                <form>
                    <input type="date" value={date} onChange={this.handleDate}/>
                    <Select
                        options={options}
                        value={selected}
                        multi={true}
                        onChange={this.handleSelect}
                    />
                </form>
                <NewSplitDetails
                    selected = {selected}
                    addSetInNewSplit = {addSetInNewSplit}
                />
                <button onClick = {this.onSubmit}>OK</button>
            </div>
        )
    }

    /*
        sets date value in reducer
    */
    handleDate = ev => {
        ev.preventDefault()
        this.props.selectDateForNewSplit(ev.target.value)
    }

    /*
        sets array of selected excercises in reducer
    */
    handleSelect = selected => {
        this.props.selectExcercisesForNewSplit(selected)
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { date, selected, addSplit, newSplitExcercises } = this.props
        if (!date || !selected) return
        addSplit(date, mapToArray(newSplitExcercises))
    }
}

export default connect((state) => {
    const { date, selected, newSplitExcercises } = state.newSplitState
    return {
        date, selected, newSplitExcercises
    }
}, {
    selectExcercisesForNewSplit,
    selectDateForNewSplit,
    addSetInNewSplit,
    addSplit
})(NewSplit)
