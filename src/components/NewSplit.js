import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'
import NewSplitTooltip from './NewSplitTooltip'
import FaPlus from 'react-icons/lib/fa/plus'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         addSetInNewSplit, addSplit } from '../AC/newSplitAC'

class NewSplit extends Component {
    render() {
        const { excercises, date, selected, newSplitExcercises, addSetInNewSplit } = this.props
        const options = excercises.map(exc => ({
            label: exc.title,
            value: exc.id
        }))
        return (
            <div  className = "newSplit">
                <form>
                    <input className = "dateInput" type="date" value={date} onChange={this.handleDate}/>
                    <Select
                        options={options}
                        value={selected}
                        multi={true}
                        onChange={this.handleSelect}
                    />
                </form>
                <NewSplitTooltip
                    newSplitExcercises = {mapToArray(newSplitExcercises)}
                />
                <NewSplitDetails
                    selected = {selected}
                    addSetInNewSplit = {addSetInNewSplit}
                />
                <button className = "newSplitSubmitButton" onClick = {this.onSubmit}><FaPlus/></button>
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
        const newSplit = mapToArray(newSplitExcercises)
        if (!date || !selected || !newSplit.length) return
        addSplit(date, newSplit)
    }
}

export default connect((state) => {
    const { date, selected, newSplitExcercises } = state.newSplitState
    const excercises = mapToArray(state.excercises)
    return {
        excercises, date, selected, newSplitExcercises
    }
}, {
    selectExcercisesForNewSplit,
    selectDateForNewSplit,
    addSetInNewSplit,
    addSplit
})(NewSplit)
