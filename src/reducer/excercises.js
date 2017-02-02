import { excercises } from '../fixtures'
import { DELETE_EXCERCISE } from '../constants'

export default (state = excercises, action) => {
    const { type, payload } = action

    switch(type) {
        case DELETE_EXCERCISE:
            return state.filter(excercise => excercise.id !== payload.id)
    }

    return state
}
