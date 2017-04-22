import React, {Component, PropTypes} from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import {setLogInField} from '../AC'
import {Tabs, Tab} from 'material-ui/Tabs'
import {connect} from 'react-redux'

const Welcome = ({email, password, newName, newEmail, newPassword, setLogInField}) => {
  const style = {
    container: {
      width: '100vw',
      height: '100vw',
      display: 'flex',
    },
    form: {
      width: '50%',
    },
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  }

  const setField = field => ev => {
    setLogInField(field, ev.target.value)
  }

  return (
    <Tabs>
      <Tab label="Log In" >
        <LoginForm
          email = {email}
          password = {password}
          setField = {setField}
        />
      </Tab>
      <Tab label="Register" >
        <RegisterForm
          email = {newEmail}
          name = {newName}
          password = {newPassword}
          setField = {setField}
        />
      </Tab>
    </Tabs>
  )
}

export default connect(store => {
  const { email, password, newName, newEmail, newPassword } = store.login
  return {
    email, password, newName, newEmail, newPassword
  }
}, {setLogInField})(Welcome)
