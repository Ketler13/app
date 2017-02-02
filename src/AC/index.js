import { DELETE_EXCERCISE } from '../constants'

export function deleteExcercise(id) {
    return {
        type: DELETE_EXCERCISE,
        payload: {
            id
        }
    }
}
