import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default ({ email, password, setField, userWasLoggedIn, logInError,
                  logIn                                                  }) => {
  const dataIsCorrect = email && password
  const enter = ev => {
    dataIsCorrect && logIn({email, password})
  }
  return (
    <div>
      <TextField
        id='4'
        value = {email}
        onChange = {setField('email')}
        hintText="example@example.com"
      />
      <br/>
      <TextField
        id='5'
        value = {password}
        onChange = {setField('password')}
        hintText="password"
      />
      <br/>
      <FlatButton
        secondary = {!!dataIsCorrect}
        disabled = {!dataIsCorrect}
        label="Log In"
        onTouchTap = {enter}
      />
      {(logInError && !userWasLoggedIn) ? <p>logInError</p> : null}
    </div>
  )
}
