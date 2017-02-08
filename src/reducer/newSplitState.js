import { SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
SET_DEFAULT_COUNT_OF_DETAILS, SET_COUNT_OF_DETAILS } from '../constants'
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
            return state.set('selected', payload.selected)

        case SELECT_DATE_FOR_NEW_SPLIT:
            return state.set('date', payload.date)

        case SET_DEFAULT_COUNT_OF_DETAILS:
            return state.set('countOfDetails', new OrderedMap({...payload.count}))

        case SET_COUNT_OF_DETAILS:
            return state.updateIn(['countOfDetails', payload.name], arr => arr.concat(payload.count))
    }

    return state
}
