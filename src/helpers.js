import { OrderedMap } from 'immutable'

export function arrayToMap(arr, Model) {
    return arr.reduce((acc,entity) => {
        const model = Model ? new Model(entity) : entity
        return acc.set(entity.id, model)
    }, new OrderedMap({}))
}

export function mapToArray(immutableMap) {
    return immutableMap.valueSeq().toArray()
}

export function generateRandomId() {
    return Date.now() + Math.random()
}

export function formatDate(date) {
    const formattedDate = new Date(Date.parse(date)).toLocaleDateString()
    return formattedDate
}

export function getToken(store) {
  return store.getState().login.token
}

export function getUserId(store) {
  return store.getState().login.user.id
}

export function checkEmailRegExp(email) {
  return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(email)
}
