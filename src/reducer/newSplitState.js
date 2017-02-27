import { SELECT_EXCERCISES_FOR_NEW_SPLIT, SELECT_DATE_FOR_NEW_SPLIT,
         ADD_SET_IN_NEW_SPLIT, DELETE_EXCERCISE_FROM_NEW_SPLIT, ADD_SPLIT,
         ADD, REMOVE, OPEN_EXCERCISE_SELECT, CLOSE_EXCERCISE_SELECT,
         OPEN_DATE_PICKER, CLOSE_DATE_PICKER, DELETE_EXCERCISE_FROM_SELECT } from '../constants'
import {} from '../helpers'
import { Record, OrderedMap } from 'immutable'

const StateModel = Record({
    'date': null,
    'selected': [],
    'excerciseSelectIsOpen': false,
    'snackBarIsOpen': false,
    'newSplitExcercises': new OrderedMap({})
})

export default (state = new StateModel({}), action) => {
    const { type, payload } = action

    switch(type) {
        case ADD_SPLIT:
            return state
                    .set('date', null)
                    .set('selected', [])
                    .set('snackBarIsOpen', true)
                    .set('newSplitExcercises', new OrderedMap({}))

        case SELECT_EXCERCISES_FOR_NEW_SPLIT:
            return state.update('selected', selected => {
                return selected.concat(payload.selected)
            })

        case SELECT_DATE_FOR_NEW_SPLIT:
            return state.set('date', payload.date)

        case ADD_SET_IN_NEW_SPLIT:
            return state
                    .updateIn(['newSplitExcercises', payload.currentExcercise], excercise => {
                        if (!excercise) return {
                                'name': payload.currentExcercise,
                                'id': payload.excerciseId,
                                'sets': [`${payload.weight}x${payload.times}`],
                                'mark': undefined
                            }
                        return {
                            ...excercise,
                            'sets': excercise.sets.concat(`${payload.weight}x${payload.times}`)
                        }
                    })

        case DELETE_EXCERCISE_FROM_SELECT:
            return state.update('selected', selected => {
                return selected.filter(item => item.label !== payload.excercise)
            })

        case DELETE_EXCERCISE_FROM_NEW_SPLIT:
            return state
                    .deleteIn(['newSplitExcercises', payload.excercise])

        case OPEN_EXCERCISE_SELECT:
            return state.set('excerciseSelectIsOpen', true)

        case CLOSE_EXCERCISE_SELECT:
            return state.set('excerciseSelectIsOpen', false)

    }

    return state
}
