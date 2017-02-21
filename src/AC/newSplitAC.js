import { SET_DEFAULT_STATE, SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
SET_DEFAULT_COUNT_OF_DETAILS, SET_COUNT_OF_DETAILS, ADD, REMOVE, ADD_SPLIT,
ADD_SET_IN_NEW_SPLIT, DELETE_EXCERCISE_FROM_NEW_SPLIT } from '../constants'

export function selectExcercisesForNewSplit(selected) {
    return {
        type: SELECT_EXCERCISES_FOR_NEW_SPLIT,
        payload: {
            selected
        }
    }
}

export function selectDateForNewSplit(date) {
    return {
        type: SELECT_DATE_FOR_NEW_SPLIT,
        payload: {
            date
        }
    }
}

export function addSetInNewSplit(config) {
    return {
        type: ADD_SET_IN_NEW_SPLIT,
        payload: {
            ...config
        }
    }
}

export function deleteExcerciseFromNewSplit(excercise) {
    return {
        type: DELETE_EXCERCISE_FROM_NEW_SPLIT,
        payload: {
            excercise
        }
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
