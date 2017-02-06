import { diary } from '../diary'
import { SHOW_DIARY, ADD_SPLIT } from '../constants'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const SplitModel = Record({
    "id": null,
    "date": null,
    "excercises": [],
    "mark": null
})

const defaultState = arrayToMap(diary, SplitModel)

export default (state = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case  SHOW_DIARY:
            return state

        case ADD_SPLIT:
            return state.set(randomId, new SplitModel({...payload, id: randomId}))
    }

    return state
}
