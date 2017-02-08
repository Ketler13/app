import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'
import { connect } from 'react-redux'
import { getDefaultCountOfDetails } from '../helpers'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         setDefaultCountOfDetails, setCountOfDetails, addSplit,
         setDefaultState } from '../AC/newSplitAC'

class NewSplit extends Component {
    componentDidMount() {
        const countOfDetails = getDefaultCountOfDetails(this.props.excercises)
        this.props.setDefaultCountOfDetails(countOfDetails)
    }

    render() {
        const { excercises, date, selected, countOfDetails } = this.props
        const options = excercises.map(exc => ({
            label: exc.title,
            value: exc.id
        }))
        return (
            <div>
                <h3>Add new split to diary</h3>
                <form onSubmit = {this.onSubmit}>
                    <input type="date" value={date} onChange={this.handleChange}/>
                    <Select
                        options={options}
                        value={selected}
                        multi={true}
                        onChange={this.selectChange}
                    />
                    <NewSplitDetails
                        selected = {selected}
                        countOfDetails = {countOfDetails}
                        handleDetail = {this.handleDetail}
                    />
                    <input type="submit" value="Ok"/>
                </form>
            </div>
        )
    }

    handleChange = ev => {
        ev.preventDefault()
        this.props.selectDateForNewSplit(ev.target.value)
    }


    selectChange = selected => {
        this.props.selectExcercisesForNewSplit(selected)
    }

    handleDetail = ev => {
        const { name, value } = ev.target
        this.props.setCountOfDetails(name, value)
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { selected, date, addSplit, setDefaultState } = this.props
        if (!date || !selected) return
        const selectedExcercises = selected.map(sel => ({
            id: sel.value,
            name: sel.label
        }))
        addSplit(date, selectedExcercises)
        setDefaultState(getDefaultCountOfDetails(this.props.excercises))
    }
}

export default connect((state) => {
    const { date, selected, countOfDetails } = state.newSplitState
    return {
        date, selected, countOfDetails
    }
}, {
    selectExcercisesForNewSplit,
    selectDateForNewSplit,
    setDefaultCountOfDetails,
    setCountOfDetails,
    addSplit,
    setDefaultState
})(NewSplit)
