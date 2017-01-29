import React, { Component, PropTypes } from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends Component {
        state = {
            openItemId: null
        }

        render() {
            return <Component
                {...this.props}
                isOpen = {this.isOpen}
                toggleOpenItem = {this.toggleOpenItem}
                />
        }

        isOpen = id => this.state.openItemId === id

        toggleOpenItem = id => ev => {
            ev && ev.preventDeafult && ev.preventDeafult()
            this.setState({
                openItemId: (this.state.openItemId === id) ? null : id
            })
        }
    }
}
