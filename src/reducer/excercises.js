import { DELETE_EXCERCISE, ADD_LINK } from '../constants'
import { normalizedExcercises } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const ExcerciseModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

const defaultState = arrayToMap(normalizedExcercises, ExcerciseModel)

export default (excerciseState = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_EXCERCISE:
            return excerciseState.delete(payload.id)

        case ADD_LINK:
            return excerciseState.updateIn([payload.excerciseId, 'comments'], comments => comments.concat(randomId))
    }

    return excerciseState
}
