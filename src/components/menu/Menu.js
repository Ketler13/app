import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

export default function Menu(props) {
    const items = props.children.map((child, i) => {
        return (
            <MenuItem key = {i}>
                {child}
            </MenuItem>
        )
    })
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
            title="gymlog"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        >
        </AppBar>
        )
}
