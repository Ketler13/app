import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default ({email, name, password, setField, nameUniqueError,
                 emailUniqueError, checkNameUnique, checkEmailUnique,
                 addUser, userWasRegistered, registerError           }) => {
  const checkEmail = ev => {
    ev.target.value && checkEmailUnique(ev.target.value)
  }

  const dataIsCorrect = email && name && password && !emailUniqueError && !nameUniqueError

  const checkName = ev => {
    ev.target.value && checkNameUnique(ev.target.value)
  }

  const add = ev => {
    dataIsCorrect && addUser({email, name, password})
  }

  if (registerError && !userWasRegistered) return (
    <div>
      <p>Error: </p>
      <p>{registerError}</p>
    </div>
  )

  if (userWasRegistered) return (
    <div>
      <p>Success: </p>
      <p>User was created. You need to log in now</p>
    </div>
  )

  return (
    <div>
      <TextField
        id='1'
        value = {email}
        onChange = {setField('newEmail')}
        hintText = "example@example.com"
        errorText = {emailUniqueError ? emailUniqueError : null}
        onBlur = {checkEmail}
      />
      <br/>
      <TextField
        id='2'
        value = {name}
        onChange = {setField('newName')}
        hintText = "user name"
        errorText = {nameUniqueError ? nameUniqueError : null}
        onBlur = {checkName}
      />
      <br/>
      <TextField
        id='3'
        value = {password}
        onChange = {setField('newPassword')}
        hintText="password"
      />
      <br/>
      <FlatButton
        primary = {!!dataIsCorrect}
        disabled = {!dataIsCorrect}
        label="Sign Up"
        onTouchTap = {add}
      />
    </div>
  )
}
