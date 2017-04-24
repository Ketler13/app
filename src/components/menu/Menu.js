import React, { PropTypes } from 'react'
import Welcome from '../Welcome'
import LogOut from '../LogOut'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { toggleLoginForm, openLoginForm, closeLoginForm, logOut } from '../../AC'
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
            onTouchTap={props.closeLoginForm}
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
                props.userWasLoggedIn ?
                <LogOut logOut = {props.logOut}/> :
                <FlatButton
                  label="Log In/Sign up"
                  onTouchTap = {props.openLoginForm}
                />
            }
            title="gymlog"
        >
          <Dialog
              actions={actions}
              modal={false}
              open={props.formIsOpen}
              onRequestClose={props.closeLoginForm}
              autoScrollBodyContent={true}
          >
            <Welcome/>
          </Dialog>
        </AppBar>
        )
}

export default connect(store => {
  return {
    formIsOpen: store.login.formIsOpen,
    userWasLoggedIn: store.login.userWasLoggedIn
  }
}, {toggleLoginForm, openLoginForm, closeLoginForm, logOut})(Menu)
