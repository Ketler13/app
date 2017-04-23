import { DELETE_EXCERCISE, ADD_LINK, LOAD_SPLITS, DELETE_SPLIT,
         LOAD_EXCERCISES, TOGGLE_LOGIN_FORM, SET_LOGIN_FIELD,
         CHECK_NAME_UNIQUE, CHECK_EMAIL_UNIQUE, ADD_USER
       } from '../constants'

export function deleteExcercise(id) {
    return {
        type: DELETE_EXCERCISE,
        payload: {
            id
        },
        deleteExcercise: true
    }
}

export function addLink(excerciseId, link) {
    return {
        type: ADD_LINK,
        payload: { excerciseId, link },
        generateId: true
    }
}

export function loadSplits() {
  return {
    type: LOAD_SPLITS,
    loadSplits: true
  }
}

export function deleteSplit(id) {
  return {
    type: DELETE_SPLIT,
    payload: {
      id
    },
    deleteSplit: true
  }
}

export function loadExcercises() {
  return {
    type: LOAD_EXCERCISES,
    loadExcercises: true
  }
}

export function toggleLoginForm() {
  return {
    type: TOGGLE_LOGIN_FORM
  }
}

export function setLogInField(field, value) {
  return {
    type: SET_LOGIN_FIELD,
    payload: {
      field, value
    }
  }
}

export function checkNameUnique(name) {
  return {
    type: CHECK_NAME_UNIQUE,
    payload: {
      name
    },
    checkName: true
  }
}

export function checkEmailUnique(email) {
  return {
    type: CHECK_EMAIL_UNIQUE,
    payload: {
      email
    },
    checkEmail: true
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
    addUser: true
  }
}
