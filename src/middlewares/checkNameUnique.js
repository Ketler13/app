import axios from 'axios'

export default store => next => action => {
  const {checkName, ...rest} = action
  if (!checkName) return next(action)
  axios({
    method: 'post',
    url: '/api/checkName',
    data: JSON.stringify(rest.payload),
    headers: {
      'content-type': 'application/json'
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
