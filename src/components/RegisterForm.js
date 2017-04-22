import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default ({email, name, password, setField}) => {
  return (
    <div>
      <TextField
        id='1'
        value = {email}
        onChange = {setField('newEmail')}
        hintText="example@example.com"
      />
      <br/>
      <TextField
        id='2'
        value = {name}
        onChange = {setField('newName')}
        hintText="name"
      />
      <br/>
      <TextField
        id='3'
        value = {password}
        onChange = {setField('newPassword')}
        hintText="password"
      />
      <br/>
      <FlatButton primary = {true} label="Sign Up"/>
    </div>
  )
}
