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

export function getDefaultCountOfDetails(excercises) {
    let countOfDetails = {}
    excercises.forEach((exc) => {
        countOfDetails[exc.title] = []
    })
    return countOfDetails
}
