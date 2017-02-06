import { combineReducers } from 'redux'
import excercises from './excercises'
import filters from './filters'
import links from './links'
import diary from './diary'

export default combineReducers({
    excercises,
    links,
    filters,
    diary
})
