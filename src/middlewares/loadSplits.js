import axios from 'axios'
import { arrayToMap } from '../helpers'

export default store => next => action => {
  const {loadSplits, ...rest} = action
  if (!loadSplits) return next(action)
  axios({
    method: 'get',
    url: '/api/splits'
  })
  .then(response => {
    const splits = JSON.parse(response.request.response)
    next({...rest, splits})
  })
  .catch(error => console.log(error))
}
