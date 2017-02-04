import { ADD_LINK } from '../constants'
import { normalizedMedia } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const LinkModel = Record({
    "id": null,
    "user": null,
    "text": null
})

const defaultState = arrayToMap(normalizedMedia, LinkModel)

export default (state = defaultState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_LINK:
            return state.set(randomId, new LinkModel({...payload.link, id: randomId}))
    }

    return state
}
