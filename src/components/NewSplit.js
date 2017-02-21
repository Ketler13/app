import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'
import { connect } from 'react-redux'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         addSplit } from '../AC/newSplitAC'

class NewSplit extends Component {
    render() {
        const { excercises, date, selected } = this.props
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
        console.log("yes")
        const { selected, date, addSplit, setDefaultState } = this.props
        if (!date || !selected) return
        const selectedExcercises = selected.map(sel => ({
            id: sel.value,
            name: sel.label
        }))
        addSplit(date, selectedExcercises)
    }
}

export default connect((state) => {
    const { date, selected } = state.newSplitState
    return {
        date, selected
    }
}, {
    selectExcercisesForNewSplit,
    selectDateForNewSplit,
    addSplit
})(NewSplit)
