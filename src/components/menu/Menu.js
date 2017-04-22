import React, { PropTypes } from 'react'
import Welcome from '../Welcome'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { toggleLoginForm } from '../../AC'
import {connect} from 'react-redux'

function Menu(props) {
    const items = props.children.map((child, i) => {
        return (
            <MenuItem key = {i}>
                {child}
            </MenuItem>
        )
    })
    const actions = [
        <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onTouchTap={props.toggleLoginForm}
        />,
    ]
    return (
        <AppBar
            iconElementLeft = {
                <IconMenu
                  iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                    {items}
                </IconMenu>
            }
            iconElementRight = {
                <FlatButton
                  label="Log In/Sign up"
                  onTouchTap = {props.toggleLoginForm}
                />
            }
            title="gymlog"
        >
          <Dialog
              actions={actions}
              modal={false}
              open={props.formIsOpen}
              onRequestClose={props.toggleLoginForm}
              autoScrollBodyContent={true}
          >
            <Welcome/>
          </Dialog>
        </AppBar>
        )
}

export default connect(store => {
  return {
    formIsOpen: store.login.formIsOpen
  }
}, {toggleLoginForm})(Menu)
