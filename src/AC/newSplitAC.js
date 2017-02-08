import { SELECT_EXCERCISES_FOR_NEW_SPLIT } from '../constants'

export function selectExcercisesForNewSplit(selected) {
    return {
        type: SELECT_EXCERCISES_FOR_NEW_SPLIT,
        payload: {
            selected
        }
    }
}
