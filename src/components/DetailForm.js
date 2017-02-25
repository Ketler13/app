import React, {Component, PropTypes} from 'react'
import Slider from 'material-ui/Slider';

export default class DetailForm extends Component {
    state = {
        weight: 0,
        times: 0
    }

    handleWeightSlider = (event, value) => {
        this.setState({weight: value})
    }

    handleTimesSlider = (event, value) => {
        this.setState({times: value})
    }

    render() {
        return (
            <div>
                <Slider
                    min={0}
                    max={200}
                    step={1}
                    defaultValue={50}
                    value={this.state.weight}
                    onChange={this.handleWeightSlider}
                />
                <Slider
                    min={0}
                    max={30}
                    step={1}
                    defaultValue={15}
                    value={this.state.times}
                    onChange={this.handleTimesSlider}
                />
                <p>weight {this.state.weight} times {this.state.times}</p>
                <button onClick = {this.handleClick}>OK</button>
            </div>
        )
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleClick = ev => {
        const { currentExcercise, excerciseId, addSetInNewSplit } = this.props
        const { weight, times } = this.state
        const config = {
            currentExcercise,
            excerciseId,
            weight,
            times
        }
        weight && times && addSetInNewSplit(config)
        weight && times && this.setState({
            weight: 0,
            times: 0
        })
    }
}
