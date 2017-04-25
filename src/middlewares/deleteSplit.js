import axios from 'axios'
import {getToken} from '../helpers'

export default store => next => action => {
  const {deleteSplit, ...rest} = action
  if (!deleteSplit) return next(action)
  axios({
    method: 'delete',
    url: `/api/splits/${rest.payload.id}`,
    headers: {
      token: getToken(store)
    },
    data: {
      rate: rest.payload.rate
    }
  })
  .then(response => {
    if (response.data.success) {
      next({...rest})
    } else {
      next({...rest, type: rest.type + '_ERROR'})
    }
  })

}
