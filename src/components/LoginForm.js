import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default ({email, password, setField}) => {
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
      <FlatButton secondary = {true} label="Log In"/>
    </div>
  )
}
