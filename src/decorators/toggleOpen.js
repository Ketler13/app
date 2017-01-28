import React, { Component, PropTypes } from 'react'

export default function toggleOpen(Component) {
    return class WrapperComponent extends Component {
        state ={
            isOpen: false
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        }

        toggleOpen = (ev) => {
            ev && ev.preventDeafult && ev.preventDeafult()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}
