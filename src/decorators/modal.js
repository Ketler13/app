import React, { Component, PropTypes } from 'react'

export default function modal(Component) {
    return class WrapperComponent extends Component {
        state = {
            open: false
        }

        handleOpen = () => {
            this.setState({open: true});
        }

        handleClose = () => {
            this.setState({open: false});
        }

        render() {
            return <Component
                {...this.props}
                {...this.state}
                handleOpen = {this.handleOpen}
                handleClose = {this.handleClose}
                />
        }
    }
}
