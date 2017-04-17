import axios from 'axios'

export default store => next => action => {
    const {checkExcerciseTitle, ...rest} = action
    if (!checkExcerciseTitle) return next(action)
    axios({
      method: 'get',
      url: `/api/checkExcerciseTitle?title=${rest.payload.title}`
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
