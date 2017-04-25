import axios from 'axios'
import {getToken} from '../helpers'

export default store => next => action => {
  const {addExcercise, ...rest} = action
  if (!addExcercise) return next(action)
  axios({
    method: 'post',
    url: '/api/addExcercise',
    data: JSON.stringify(rest.payload),
    headers: {
      'content-type': 'application/json',
      token: getToken(store)
    }
  })
  .then(response => {
    if (response.data.success) {
      next({...rest})
    } else {
      next({...rest, type: rest.type + '_ERROR', error: response.data.error})
    }
  })
  .catch(error => {
    next({...rest, type: rest.type + '_ERROR', error})
  })
}
