import { CHECK_EXCERCISE_TITLE, SET_EXCERCISE_TEXT, SET_EXCERCISE_TITLE,
         TOGGLE_NEW_EXCERCISE_FORM, ADD_EXCERCISE } from '../constants'

export function checkExcerciseTitle(title) {
  return {
    type: CHECK_EXCERCISE_TITLE,
    payload: {
      title
    },
    checkExcerciseTitle: true
  }
}

export function setExcerciseField(field, value) {
  return {
    type: field === 'title' ? SET_EXCERCISE_TITLE : SET_EXCERCISE_TEXT,
    payload: {
      value
    }
  }
}

export function toggleNewExcerciseForm() {
  return {
    type: TOGGLE_NEW_EXCERCISE_FORM
  }
}
export function addExcercise(title, text) {
  return {
    type: ADD_EXCERCISE,
    payload: {
      title, text
    },
    addExcercise: true
  }
}
