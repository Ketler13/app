import React, {Component, PropTypes} from 'react'

export default class FormOfOneSet extends Component {
    state = {
        weight: "",
        times: ""
    }
    render() {
        return (
            <div>
                <p>Weight: <input type="number" value={this.state.weight} onChange={this.handleChange("weight")}/></p>
                <p>Times: <input type="number" value={this.state.times} onChange={this.handleChange("times")}/></p>
                <p><button onClick={this.handleClick}>add</button></p>
            </div>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleClick = ev => {
        const { currentExcercise, numberOfSet, handleSetsInNewSplit } = this.props
        const { weight, times } = this.state
        const config = {
            currentExcercise,
            numberOfSet,
            weight,
            times
        }
        weight && times && handleSetsInNewSplit(config)
    }
}
