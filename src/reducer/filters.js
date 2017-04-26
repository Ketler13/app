import { CHANGE_DATE_RANGE, CHANGE_SELECTION, LOG_OUT } from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_DATE_RANGE:
            return {...filters, dateRange: payload.dateRange}

        case CHANGE_SELECTION:
            return {...filters, selected: payload.selected}

        case LOG_OUT:
          return defaultFilters
    }

    return filters
}
