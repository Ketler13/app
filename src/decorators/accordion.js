import React, { Component, PropTypes } from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends Component {
        state = {
            openExcerciseId: null
        }

        render() {
            return <Component
                {...this.props}
                openExcerciseId = {this.state.openExcerciseId}
                toggleOpenExcercise = {this.toggleOpenExcercise}
                />
        }

        toggleOpenExcercise = id => ev => {
            ev && ev.preventDeafult && ev.preventDeafult()
            this.setState({
                openExcerciseId: (this.state.openExcerciseId === id) ? null : id
            })
        }
    }
}
