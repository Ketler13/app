import { SELECT_EXCERCISES_FOR_NEW_SPLIT } from '../constants'
import {} from '../helpers'
import { Record, OrderedMap } from 'immutable'

const StateModel = Record({
    date: "",
    selected: null,
    countOfDetails: new OrderedMap({})
})

export default (state = new StateModel({}), action) => {
    const { type, payload } = action

    switch(type) {
        case SELECT_EXCERCISES_FOR_NEW_SPLIT:
            return state.set("selected", payload.selected)
    }

    return state
}
