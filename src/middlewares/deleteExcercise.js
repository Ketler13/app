import axios from 'axios'
import {getToken} from '../helpers'

export default store => next => action => {
  const {deleteExcercise, ...rest} = action
  if (!deleteExcercise) return next(action)
  axios({
    method: 'delete',
    url: `/api/excercises/${rest.payload.id}`,
    headers: {
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
