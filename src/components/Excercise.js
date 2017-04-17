import React, { Component, PropTypes } from 'react'
import MediaLinkList from './MediaLinkList'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import modal from '../decorators/modal'

class Excercise extends Component {
    static propTypes = {
        excercise: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func,
        deleteExcercise: PropTypes.func
    }

    handleDelete = id => ev => {
        ev.preventDefault()
        this.props.handleClose()
        this.props.deleteExcercise(id)
    }

    getBody = () => {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.excercise.text}
            </section>
        )
    }

    render() {
        const { excercise, onClick, handleDelete } = this.props
        const style = {
            paper: {
                padding: '10px',
                position: 'relative',
            },
            button: {
                position: 'absolute',
                top: '-5px',
                right: '5px',
            },
            icon : {
                color: 'rgb(207, 0, 15)',
            }

        }
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.handleClose}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleDelete(this.props.excercise.id)}
            />,
        ]

        return (
            <Paper zDepth={5} style = {style.paper}>
                <h3 onClick = {onClick}>{excercise.title}</h3>
                <IconButton
                    style = {style.button}
                    iconStyle = {style.icon}
                    onTouchTap = {this.props.handleOpen}
                >
                    <ContentClear />
                </IconButton>
                <Dialog
                    title='Are you sure?'
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                >
                    You are trying to delete {excercise.title} from the list
                </Dialog>
                {this.getBody()}
            </Paper>
        )
    }
}

export default modal(Excercise)
