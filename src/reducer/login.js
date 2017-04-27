import { TOGGLE_LOGIN_FORM, OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM, SET_LOGIN_FIELD,
         CHECK_NAME_UNIQUE, CHECK_EMAIL_UNIQUE, ADD_USER, LOG_IN, LOG_OUT
       } from '../constants'

const defaultState = {
  formIsOpen: false,
  email: '',
  password: '',
  newEmail: '',
  newName: '',
  newPassword: '',
  userIsTypingemail: false,
  userIsTypingname: false,
  userIsTypingpassword: false,
  nameUniqueError: '',
  emailUniqueError: '',
  userWasRegistered: false,
  registerError: '',
  userWasLoggedIn: false,
  logInError: '',
  user: null,
  token: null
}

export default (state = defaultState, action) => {
  const { type, payload, error, user, token } = action

  switch (type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        formIsOpen: !state.formIsOpen
      }

    case OPEN_LOGIN_FORM:
      return {
        ...state,
        formIsOpen: true
      }

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        formIsOpen: false
      }

    case SET_LOGIN_FIELD:
      return {
        ...state,
        [`userIsTyping${payload.field.toLowerCase().slice(3)}`]: true,
        [payload.field]: payload.value
      }

    case CHECK_EMAIL_UNIQUE:
      return {
        ...state,
        userIsTypingname: false,
        userIsTypingemail: false,
        userIsTypingpassword: false,
        registerError: '',
        emailUniqueError: ''
      }

    case CHECK_NAME_UNIQUE:
      return {
        ...state,
        userIsTypingname: false,
        userIsTypingemail: false,
        userIsTypingpassword: false,
        registerError: '',
        nameUniqueError: ''
      }

    case CHECK_EMAIL_UNIQUE + '_ERROR':
      return {
        ...state,
        userIsTypingname: false,
        userIsTypingemail: false,
        userIsTypingpassword: false,
        emailUniqueError: error
      }

    case CHECK_NAME_UNIQUE + '_ERROR':
      return {
        ...state,
        userIsTypingname: false,
        userIsTypingemail: false,
        userIsTypingpassword: false,
        nameUniqueError: error
      }

    case ADD_USER:
      return {
        ...state,
        userIsTypingname: false,
        userIsTypingemail: false,
        userIsTypingpassword: false,
        newEmail: '',
        newName: '',
        newPassword: '',
        nameUniqueError: '',
        emailUniqueError: '',
        userWasRegistered: true,
        registerError: ''
      }

    case ADD_USER + '_ERROR':
      return {
        ...state,
        userIsTypingname: false,
        userIsTypingemail: false,
        userIsTypingpassword: false,
        userWasRegistered: false,
        registerError: error
      }

    case LOG_IN:
      return {
        ...defaultState,
        userWasLoggedIn: true,
        user,
        token
      }

    case LOG_IN + '_ERROR':
      return {
        ...state,
        userIsTyping: false,
        userWasLoggedIn: false,
        logInError: error
      }

    case LOG_OUT:
      return {
        ...defaultState
      }
  }

  return state
}
