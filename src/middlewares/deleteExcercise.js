import axios from 'axios'

export default store => next => action => {
  const {deleteExcercise, ...rest} = action
  if (!deleteExcercise) return next(action)
  axios({
    method: 'delete',
    url: `/api/excercises/${rest.payload.id}`
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
