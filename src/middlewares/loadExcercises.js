import axios from 'axios'
import {getToken} from '../helpers'

export default store => next => action => {
  const {loadExcercises, ...rest} = action
  if (!loadExcercises) return next(action)
  axios({
    method: 'get',
    url: '/api/excercises',
    headers: {
      token: getToken(store)
    }
  })
  .then(response => {
    if (response.data.success) {
      next({...rest, excercises: response.data.excercises})
    } else {
      next({...rest, type: rest.type + '_ERROR', error: response.data.error})
    }
  })
  .catch(error => {
    next({...rest, type: rest.type + '_ERROR', error})
  })
}
