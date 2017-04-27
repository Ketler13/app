import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'

function CustomSelect(props) {
    if (!props.excercises || !props.excercises.length) {
      return (
        <ul>
          <li>
            Нет доступных упражнений. Возможно, стоит добавить свое.
          </li>
        </ul>
      )
    } else {
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
      }
    )
    return <ul>{itemsForSelect}</ul>
  }
}

CustomSelect.propTypes = {
    excercises: PropTypes.array.isRequired,
    selected: PropTypes.array,
    handleSelect: PropTypes.func
}

export default CustomSelect
