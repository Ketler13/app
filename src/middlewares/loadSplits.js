import axios from 'axios'
import { arrayToMap, getToken } from '../helpers'

export default store => next => action => {
  const {loadSplits, ...rest} = action
  if (!loadSplits) return next(action)
  axios({
    method: 'post',
    url: '/api/splits',
    data: {
      user: rest.payload.user
    },
    headers: {
      token: getToken(store)
    }
  })
  .then(response => {
    const splits = JSON.parse(response.request.response)
    next({...rest, splits})
  })
  .catch(error => console.log(error))
}
