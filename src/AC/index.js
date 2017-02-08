import { DELETE_EXCERCISE, ADD_LINK, ADD_SPLIT } from '../constants'

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

export function addSplit(date, excercises) {
    return {
        type: ADD_SPLIT,
        payload: {
            date,
            excercises
        },
        generateId: true
    }
}
