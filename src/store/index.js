import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import addSplit from '../middlewares/addSplit'
import loadSplits from '../middlewares/loadSplits'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(loadSplits, addSplit, randomId))

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
