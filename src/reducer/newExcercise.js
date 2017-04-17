import { CHECK_EXCERCISE_TITLE, SET_EXCERCISE_TEXT, SET_EXCERCISE_TITLE,
         TOGGLE_NEW_EXCERCISE_FORM, ERROR, ADD_EXCERCISE } from '../constants'
import {} from '../helpers'

const DefaultState = {
  title: '',
  text: '',
  error: null,
  formIsOpened: false
}

export default (state = DefaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_NEW_EXCERCISE_FORM:
      return {
        ...state,
        formIsOpened: !state.formIsOpened
      }

    case CHECK_EXCERCISE_TITLE:
      return state

    case SET_EXCERCISE_TITLE:
      return {
        ...state,
        title: payload.value
      }

    case SET_EXCERCISE_TEXT:
      return {
        ...state,
        text: payload.value
      }

    case ADD_EXCERCISE:
      return DefaultState
  }

  return state
}
