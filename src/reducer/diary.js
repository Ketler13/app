import { diary } from '../diary'
import { LOAD_SPLITS, ADD_SPLIT, ADD_RATE } from '../constants'
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
  const { type, payload, randomId, splits } = action

  switch (type) {
    case LOAD_SPLITS:
      return state.merge(arrayToMap(splits, SplitModel))

    case ADD_SPLIT:
      return state.set(randomId, new SplitModel({...payload, id: randomId}))

    case ADD_RATE:
    console.log(payload)
      return state.setIn([payload.id, 'mark'], Number(payload.rate))


  }

  return state
}
