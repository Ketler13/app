import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import addSplit from '../middlewares/addSplit'
import loadSplits from '../middlewares/loadSplits'
import setRate from '../middlewares/setRate'
import deleteSplit from '../middlewares/deleteSplit'
import checkExcerciseTitle from '../middlewares/checkExcerciseTitle'
import addExcercise from '../middlewares/addExcercise'
import loadExcercises from '../middlewares/loadExcercises'
import deleteExcercise from '../middlewares/deleteExcercise'
import checkNameUnique from '../middlewares/checkNameUnique'
import checkEmailUnique from '../middlewares/checkEmailUnique'
import addUser from '../middlewares/addUser'
import logIn from '../middlewares/logIn'
import logOut from '../middlewares/logOut'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(loadSplits, addSplit,
  deleteSplit, setRate, randomId, checkExcerciseTitle, addExcercise,
  loadExcercises, deleteExcercise, checkNameUnique, checkEmailUnique, addUser,
  logIn, logOut))

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
