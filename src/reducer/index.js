import { combineReducers } from 'redux'
import excercises from './excercises'
import filters from './filters'

export default combineReducers({
    excercises,
    filters
})
