import axios from 'axios'

export default store => next => action => {
  const {deleteSplit, ...rest} = action
  if (!deleteSplit) return next(action)
  axios({
    method: 'delete',
    url: `/api/splits/${rest.payload.id}`,
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
