import { combineReducers } from 'redux'
import excercises from './excercises'
import filters from './filters'
import links from './links'
import diary from './diary'
import newSplitState from './newSplitState'
import newExcercise from './newExcercise'
import login from './login'

export default combineReducers({
    excercises,
    links,
    filters,
    diary,
    newSplitState,
    newExcercise,
    login
})
