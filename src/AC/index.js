import { DELETE_EXCERCISE, ADD_LINK, LOAD_SPLITS, DELETE_SPLIT } from '../constants'

export function deleteExcercise(id) {
    return {
        type: DELETE_EXCERCISE,
        payload: {
            id
        }
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
