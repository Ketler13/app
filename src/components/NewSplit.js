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
        /*
        getDefaultCountOfDetails returns object with empty arrays as values
        and excercise titles as keys.
        setDefaultCountOfDetails updates countOfDetails in store.newSplitState
        to default
        */
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

    /*
        sets date value in reducer
    */
    handleChange = ev => {
        ev.preventDefault()
        this.props.selectDateForNewSplit(ev.target.value)
    }

    /*
        sets array of selected excercises in reducer
    */
    selectChange = selected => {
        this.props.selectExcercisesForNewSplit(selected)
    }

    /*
        handles details for every excercise, depends on button value (add/remove)
    */
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
        /*
            after successful adding new split to database returns reducer
            to default state like componentDidMount just've worked
        */
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
