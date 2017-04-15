import axios from 'axios'

export default store => next => action => {
    const {setRate, ...rest} = action
    if (!setRate) return next(action)
    axios({
      method: 'patch',
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
