import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'

function CustomSelect(props) {
    const itemsForSelect = props.excercises.map(exc => {
        const isExcerciseSelected = props.selected.some(sel => {
            return sel.label === exc.title
        })
        const selected = {
            label: String(exc.title),
            value: String(exc.id)
        }
        return (
            <li key = {exc.id} onTouchTap = {props.handleSelect(selected, isExcerciseSelected)}>
                <Checkbox
                    checked = {isExcerciseSelected}
                    label={exc.title}
                />
            </li>
        )
    })
    return <ul>{itemsForSelect}</ul>
}

CustomSelect.propTypes = {
    excercises: PropTypes.array.isRequired,
    selected: PropTypes.array,
    handleSelect: PropTypes.func
}

export default CustomSelect
