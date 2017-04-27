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

  const style = {
    input: {
      width: '80%',
    }
  }

  return (
    <div>
      <TextField
        id='4'
        style = {style.input}
        value = {email}
        onChange = {setField('email')}
        hintText="user@example.com"
        type='email'
      />
      <br/>
      <TextField
        id='5'
        style = {style.input}
        value = {password}
        onChange = {setField('password')}
        hintText="******"
        type='password'
      />
      <br/>
      <FlatButton
        secondary = {!!dataIsCorrect}
        disabled = {!dataIsCorrect}
        label="Войти"
        onTouchTap = {enter}
      />
      {(logInError && !userWasLoggedIn) ? <p>{logInError}</p> : null}
    </div>
  )
}
