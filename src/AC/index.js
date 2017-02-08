import { DELETE_EXCERCISE, ADD_LINK } from '../constants'

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
