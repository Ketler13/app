import axios from 'axios'
import {getToken} from '../helpers'

export default store => next => action => {
    const {generateId, ...rest} = action
    if (generateId) {
      axios({
        method: 'post',
        url: '/api/addSplit',
        data: JSON.stringify(rest.payload),
        headers: {
          'content-type': 'application/json',
          token: getToken(store)
        }
      })
      .then(response => console.log(JSON.parse(response.request.response)))
    }
    next(action)
}
