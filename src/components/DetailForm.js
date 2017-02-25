import React, {Component, PropTypes} from 'react'
import Slider from 'material-ui/Slider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

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

    render() {
        const { weight, times } = this.state
        const disabled = !(weight && times)
        const style = {
            margin: '5px 0 0 50%',
            transform: 'translateX(-50%)'
        }
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
                <p className = 'detailFormLabel'>{this.state.weight} kg</p>
                <Slider
                    min={0}
                    max={30}
                    step={1}
                    defaultValue={15}
                    value={this.state.times}
                    onChange={this.handleTimesSlider}
                />
                <p className = 'detailFormLabel'>{this.state.times} times</p>
                <FloatingActionButton
                    secondary = {disabled ? false : true}
                    disabled = {disabled ? true : false}
                    onTouchTap = {this.handleClick}
                    style = {style}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}
