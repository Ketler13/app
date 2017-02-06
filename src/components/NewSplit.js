import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'

export default class NewSplit extends Component {
    state = {
        date: "",
        selected: null
    }

    render() {
        const { excercises } = this.props
        const options = excercises.map(exc => ({
            label: exc.title,
            value: exc.id
        }))
        return (
            <form onSubmit = {this.onSubmit}>
                <input type="date" value={this.state.date} onChange={this.handleChange("date")}/>
                <Select
                    options={options}
                    value={this.state.selected}
                    multi={true}
                    onChange={this.selectChange}
                />
                <NewSplitDetails selected = {this.state.selected}/>
                <input type="submit" value="Ok"/>
            </form>
        )
    }

    handleChange = field => ev => {
        ev.preventDefault()
        this.setState({
            [field]: ev.target.value
        })
    }


    selectChange = selected => {
        this.setState({
            selected
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { addSplit } = this.props
        const { date, selected } = this.state
        if (!date || !selected) return
        const selectedExcercises = selected.map(sel => ({
            id: sel.value,
            name: sel.label
        }))
        addSplit(date, selectedExcercises)
        this.setState({
            date: "",
            selected: null
        })
    }
}
