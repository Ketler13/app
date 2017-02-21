import { SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
         ADD_SET_IN_NEW_SPLIT, ADD_SPLIT, ADD, REMOVE } from '../constants'
import {} from '../helpers'
import { Record, OrderedMap } from 'immutable'

const StateModel = Record({
    date: '',
    selected: null,
    sets: new OrderedMap({})
})

export default (state = new StateModel({}), action) => {
    const { type, payload } = action

    switch(type) {
        case ADD_SPLIT:
            return state
                    .set('date', '')
                    .set('selected', null)
                    .set('sets', new OrderedMap({}))

        case SELECT_EXCERCISES_FOR_NEW_SPLIT:
            return state.set('selected', payload.selected)

        case SELECT_DATE_FOR_NEW_SPLIT:
            return state.set('date', payload.date)

        case ADD_SET_IN_NEW_SPLIT:
            return state
                    .updateIn(['sets', payload.currentExcercise], excercise => {
                        if (!excercise) return [`${payload.weight}*${payload.times}`]
                        return excercise.concat(`${payload.weight}*${payload.times}`)
                    })
    }

    return state
}
