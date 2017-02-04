import { combineReducers } from 'redux'
import excercises from './excercises'
import filters from './filters'
import links from './links'

export default combineReducers({
    excercises,
    links,
    filters
})
