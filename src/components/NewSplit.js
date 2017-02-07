import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'

export default class NewSplit extends Component {
    state = {
        date: "",
        selected: null,
        countOfDetails: {}
    }

    componentDidMount() {
        let countOfDetails = {}
        this.props.excercises.forEach((exc) => {
            countOfDetails[exc.title] = []
        })
        this.setState({
            countOfDetails: {...countOfDetails}
        })
    }

    render() {
        const { excercises } = this.props
        const options = excercises.map(exc => ({
            label: exc.title,
            value: exc.id
        }))
        console.log(this.state)
        return (
            <form onSubmit = {this.onSubmit}>
                <input type="date" value={this.state.date} onChange={this.handleChange("date")}/>
                <Select
                    options={options}
                    value={this.state.selected}
                    multi={true}
                    onChange={this.selectChange}
                />
                <NewSplitDetails
                    selected = {this.state.selected}
                    countOfDetails = {this.state.countOfDetails}
                    handleDetail = {this.handleDetail}
                />
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

    handleDetail = ev => {
        const { name, value } = ev.target
        // if (!this.state.countOfDetails[name]) this.setState({
        //     countOfDetails: {
        //         ...this.state.countOfDetails,
        //         [name]: []
        //     }
        // })
        this.setState({
            countOfDetails: {
                ...this.state.countOfDetails,
                [name]: (value === "+") ? this.state.countOfDetails[name].concat(1) : this.state.countOfDetails[name].slice(0, -1)}
        })
        // this.setState({
        //     countOfDetails: (value === "+") ? this.state.countOfDetails.concat(1) : this.state.countOfDetails.slice(0, -1)
        // })
    }
}
