import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(randomId))

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
