import { SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
SET_DEFAULT_COUNT_OF_DETAILS, SET_COUNT_OF_DETAILS } from '../constants'

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

export function setCountOfDetails(name, count) {
    return {
        type: SET_COUNT_OF_DETAILS,
        payload: {
            name,
            count
        }
    }
}
