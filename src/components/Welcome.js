import React, {Component, PropTypes} from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import {setLogInField, checkNameUnique, checkEmailUnique, addUser} from '../AC'
import {Tabs, Tab} from 'material-ui/Tabs'
import {connect} from 'react-redux'

const Welcome = ({email, password, newName, newEmail, newPassword,
                  setLogInField, nameUniqueError, emailUniqueError,
                  checkNameUnique, checkEmailUnique, userWasRegistered,
                  registerError, addUser                               }) => {
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
      <Tab label="Sign Up" >
        <RegisterForm
          email = {newEmail}
          name = {newName}
          password = {newPassword}
          setField = {setField}
          nameUniqueError = {nameUniqueError}
          emailUniqueError = {emailUniqueError}
          checkNameUnique = {checkNameUnique}
          checkEmailUnique = {checkEmailUnique}
          userWasRegistered = {userWasRegistered}
          registerError = {registerError}
          addUser = {addUser}
        />
      </Tab>
    </Tabs>
  )
}

export default connect(store => {
  const { email, password, newName, newEmail, newPassword, nameUniqueError,
          emailUniqueError, userWasRegistered, registerError } = store.login
  return {
    email, password, newName, newEmail, newPassword, nameUniqueError,
    emailUniqueError, userWasRegistered, registerError
  }
}, {setLogInField, checkNameUnique, checkEmailUnique, addUser})(Welcome)
