import { diary } from '../diary'
import { LOAD_SPLITS, ADD_SPLIT, ADD_RATE, DELETE_SPLIT } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const SplitModel = Record({
  id: null,
  date: null,
  excercises: [],
  mark: 0
})

const defaultState = arrayToMap(diary, SplitModel)

export default (state = new OrderedMap({}), action) => {
  const { type, payload, splits } = action

  switch (type) {
    case LOAD_SPLITS:
      return state.merge(arrayToMap(splits, SplitModel))

    case ADD_RATE:
      return state.setIn([payload.id, 'mark'], Number(payload.rate))

    case ADD_RATE + '_ERROR':
      return state

    case DELETE_SPLIT:
      return state.delete(payload.id)

    case DELETE_SPLIT + '_ERROR':
      console.log('error')
      return state
  }

  return state
}

// case ADD_SPLIT:
//   return state.set(randomId, new SplitModel({...payload, id: randomId}))
