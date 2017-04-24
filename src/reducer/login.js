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
        [payload.field]: payload.value
      }

    case CHECK_EMAIL_UNIQUE:
      return {
        ...state,
        emailUniqueError: ''
      }

    case CHECK_NAME_UNIQUE:
      return {
        ...state,
        nameUniqueError: ''
      }

    case CHECK_EMAIL_UNIQUE + '_ERROR':
      return {
        ...state,
        emailUniqueError: error
      }

    case CHECK_NAME_UNIQUE + '_ERROR':
      return {
        ...state,
        nameUniqueError: error
      }

    case ADD_USER:
      return {
        ...state,
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
