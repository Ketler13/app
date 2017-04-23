import axios from 'axios'

export default store => next => action => {
  const {logIn, ...rest} = action
  if (!logIn) return next(action)
  axios({
    method: 'post',
    url: '/api/logIn',
    data: JSON.stringify(rest.payload),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => {
    if (response.data.success) {
      next({...rest, user: response.data.user})
    } else {
      next({...rest, type: rest.type + '_ERROR', error: response.data.error})
    }
  })
  .catch(error => {
    next({...rest, type: rest.type + '_ERROR', error})
  })
}
