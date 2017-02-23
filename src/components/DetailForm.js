import React, {Component, PropTypes} from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

export default class DetailForm extends Component {
    state = {
        weight: "",
        times: ""
    }
    render() {
        return (
            <div>
                <p><input className = "detailInput" type="number" value={this.state.weight} onChange={this.handleChange("weight")}/> kg</p>
                <p><input className = "detailInput" type="number" value={this.state.times} onChange={this.handleChange("times")}/> times</p>
                <p><button className = "detailSubmitButton" onClick={this.handleClick}><FaPlus/></button></p>
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
            weight: "",
            times: ""
        })
    }
}
