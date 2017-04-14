import axios from 'axios'

export default store => next => action => {
    const {generateId, ...rest} = action
    if (generateId) {
      axios({
        method: 'post',
        url: '/api/addSplit',
        data: JSON.stringify(rest.payload),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => console.log(JSON.parse(response.request.response)))
    }
    next(action)
}
