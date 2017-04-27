import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Done from 'material-ui/svg-icons/action/done'

export default ({email, name, password, setField, nameUniqueError,
                 emailUniqueError, checkNameUnique, checkEmailUnique,
                 addUser, userWasRegistered, registerError, userIsTypingname,
                 userIsTypingemail, userIsTypingpassword                 }) => {

  const checkEmail = ev => {
    ev.target.value && checkEmailUnique(ev.target.value)
  }

  const dataIsCorrect = (
    email && name && password && !emailUniqueError && !nameUniqueError && !registerError
  )

  const checkName = ev => {
    ev.target.value && checkNameUnique(ev.target.value)
  }

  const add = ev => {
    dataIsCorrect && addUser({email, name, password})
  }

  const style = {
    input: {
      width: '80%',
    }
  }

  if (userWasRegistered) return (
    <div>
      <p>Выполнено: </p>
      <p>Пользователь был создан. Выполните вход.</p>
    </div>
  )

  return (
    <div>
      <TextField
        id='1'
        style = {style.input}
        value = {email}
        onChange = {setField('newEmail')}
        hintText = "user@example.com"
        errorText = {(email && emailUniqueError) ? emailUniqueError : null}
        onBlur = {checkEmail}
        type='email'
      />
      <span>
        {(email && !emailUniqueError  && !userIsTypingemail) ? <Done/> : null}
      </span>
      <br/>
      <TextField
        id='2'
        style = {style.input}
        value = {name}
        onChange = {setField('newName')}
        hintText = "Имя пользователя"
        errorText = {(name && nameUniqueError) ? nameUniqueError : null}
        onBlur = {checkName}
      />
      <span>
        {(name && !nameUniqueError  && !userIsTypingname) ? <Done/> : null}
      </span>
      <br/>
      <TextField
        id='3'
        style = {style.input}
        value = {password}
        onChange = {setField('newPassword')}
        hintText="******"
        type='password'
      />
      <br/>
      <FlatButton
        primary = {!!dataIsCorrect}
        disabled = {!dataIsCorrect}
        label="Зарегистрировать"
        onTouchTap = {add}
      />
      <br/>
      <p style = {{color: 'red'}}>{registerError ? registerError : null}</p>
      <br/>
    </div>
  )
}
