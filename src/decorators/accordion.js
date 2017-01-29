import React, { Component, PropTypes } from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends Component {
        state = {
            openItemId: null
        }

        render() {
            return <Component
                {...this.props}
                openItemId = {this.state.openItemId}
                toggleOpenItem = {this.toggleOpenItem}
                />
        }

        toggleOpenItem = id => ev => {
            ev && ev.preventDeafult && ev.preventDeafult()
            this.setState({
                openItemId: (this.state.openItemId === id) ? null : id
            })
        }
    }
}
