import axios from 'axios'

export default store => next => action => {
  const {loadExcercises, ...rest} = action
  if (!loadExcercises) return next(action)
  axios({
    method: 'get',
    url: '/api/excercises'
  })
  .then(response => {
    if (response.data.success) {
      next({...rest, excercises: response.data.excercises})
    } else {
      next({...rest, type: rest.type + '_ERROR'})
    }
  })
  .catch(error => {
    next({...rest, type: rest.type + '_ERROR'})
  })
}
