import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../AC/filters'
import { mapToArray } from '../helpers'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        excercises: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired,
        changeSelection: PropTypes.func.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const { excercises, selected } = this.props
        const options = excercises.map(excercise => ({
            label: excercise.title,
            value: excercise.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    excercises: mapToArray(state.excercises)
}), { changeSelection })(SelectFilter)
