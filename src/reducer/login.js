import { TOGGLE_LOGIN_FORM, SET_LOGIN_FIELD, CHECK_NAME_UNIQUE,
         CHECK_EMAIL_UNIQUE, ADD_USER
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
  registerError: ''
}

export default (state = defaultState, action) => {
  const { type, payload, error } = action

  switch (type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        formIsOpen: !state.formIsOpen
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
        userWasRegistered: true,
        registerError: ''
      }

    case ADD_USER + '_ERROR':
      return {
        ...state,
        userWasRegistered: false,
        registerError: error
      }
  }

  return state
}
