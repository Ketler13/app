import { TOGGLE_LOGIN_FORM, SET_LOGIN_FIELD } from '../constants'

const defaultState = {
  formIsOpen: false,
  email: '',
  password: '',
  newEmail: '',
  newName: '',
  newPassword: ''
}

export default (state = defaultState, action) => {
  const { type, payload } = action

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
  }

  return state
}
