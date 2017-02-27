import { SET_DEFAULT_STATE, SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
SET_DEFAULT_COUNT_OF_DETAILS, SET_COUNT_OF_DETAILS, ADD, REMOVE, ADD_SPLIT,
ADD_SET_IN_NEW_SPLIT, DELETE_EXCERCISE_FROM_NEW_SPLIT,
OPEN_EXCERCISE_SELECT, CLOSE_EXCERCISE_SELECT, OPEN_DATE_PICKER,
CLOSE_DATE_PICKER, DELETE_EXCERCISE_FROM_SELECT, ADD_RATE } from '../constants'

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

export function openNewSplitModal(modalName) {
    return {
        type: 'OPEN_' + modalName
    }
}

export function closeNewSplitModal(modalName) {
    return {
        type: 'CLOSE_' + modalName
    }
}

export function deleteExcerciseFromSelect(excercise) {
    return {
        type: DELETE_EXCERCISE_FROM_SELECT,
        payload: {
            excercise
        }
    }
}

export function addRate(id, rate) {
    return {
        type: ADD_RATE,
        payload: {
            id,
            rate
        }
    }
}
