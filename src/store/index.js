import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import addSplit from '../middlewares/addSplit'
import loadSplits from '../middlewares/loadSplits'
import setRate from '../middlewares/setRate'
import deleteSplit from '../middlewares/deleteSplit'
import checkExcerciseTitle from '../middlewares/checkExcerciseTitle'
import addExcercise from '../middlewares/addExcercise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(loadSplits, addSplit,
  deleteSplit, setRate, randomId, checkExcerciseTitle, addExcercise))

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
