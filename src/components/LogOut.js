import React, {PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'

const LogOut = ({logOut}) => {
  return (
    <FlatButton
      label="Log Out"
      onTouchTap = {logOut}
    />
  )
}

export default LogOut
