import { SET_DEFAULT_STATE, SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
SET_DEFAULT_COUNT_OF_DETAILS, SET_COUNT_OF_DETAILS, ADD, REMOVE, ADD_SPLIT } from '../constants'

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

export function setDefaultCountOfDetails(count) {
    return {
        type: SET_DEFAULT_COUNT_OF_DETAILS,
        payload: {
            count
        }
    }
}

export function setCountOfDetails(name, value) {
    return {
        type: (value === '+') ? (SET_COUNT_OF_DETAILS + ADD) : (SET_COUNT_OF_DETAILS + REMOVE),
        payload: {
            name
        }
    }
}

export function setDefaultState(count) {
    return {
        type: SET_DEFAULT_STATE,
        payload: {
            count
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
