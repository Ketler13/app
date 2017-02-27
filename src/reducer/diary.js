import { diary } from '../diary'
import { SHOW_DIARY, ADD_SPLIT, ADD_RATE } from '../constants'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const SplitModel = Record({
    "id": null,
    "date": null,
    "excercises": [],
    "mark": 0
})

const defaultState = arrayToMap(diary, SplitModel)

export default (state = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case  SHOW_DIARY:
            return state

        case ADD_SPLIT:
            return state.set(randomId, new SplitModel({...payload, id: randomId}))

        case ADD_RATE:
            return state.setIn([payload.id, 'mark'], Number(payload.rate))
    }

    return state
}
