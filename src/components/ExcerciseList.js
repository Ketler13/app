import React, { Component, PropTypes } from 'react'
import { excercises } from '../fixtures'
import Excercise from './Excercise'
import NewExcerciseForm from './NewExcerciseForm'
import Filter from './Filters'
import RaisedButton from 'material-ui/RaisedButton'
import accordion from '../decorators/accordion'
import { deleteExcercise } from '../AC'
import { setExcerciseField, toggleNewExcerciseForm, addExcercise, checkExcerciseTitle } from '../AC/newExcercise'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'

class ExcerciseList extends Component {
    static PropTypes = {
        excercises: PropTypes.array.isRequired,
        isOpenItem: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired,
        deleteExcercise: PropTypes.func.isRequired
    }

    toggleNewExcerciseForm = ev => {
      this.props.toggleNewExcerciseForm();
    }

    setExcerciseField = field => ev => {
      this.props.setExcerciseField(field, ev.target.value)
    }

    checkExcerciseTitle = ev => {
      ev.target.value && this.props.checkExcerciseTitle(ev.target.value)
    }

    addExcercise = (title, text) => ev => {
      this.props.addExcercise(title, text)
    }

    render() {
      const {formIsOpened, title, text, error, titleIsChecked} = this.props
        const style = {
            container: {
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'flexStart',
                alignItems: 'center',
            },
            item: {
                margin: '10px 0',
                width: '70%',
            },
            button: {
              width: '100%',
            }
        }

        const excercises = this.props.excercises.map(excercise => {
            return (
                 <li key = {excercise.id}  style = {style.item}>
                    <Excercise
                        excercise = {excercise}
                        isOpen = {this.props.isOpen(excercise.id)}
                        onClick = {this.props.toggleOpenItem(excercise.id)}
                        deleteExcercise = {this.props.deleteExcercise}
                    />
                </li>
            )
        })
        return (
            <div className = "excercises">
                <Filter/>
                <RaisedButton
                  label="Add new"
                  onTouchTap={this.toggleNewExcerciseForm}
                  secondary={true}
                  style={style.button}
                />
                <NewExcerciseForm
                  isOpen = {formIsOpened}
                  title = {title}
                  text = {text}
                  error = {error}
                  setField = {this.setExcerciseField}
                  closeForm = {this.toggleNewExcerciseForm}
                  checkTitle = {this.checkExcerciseTitle}
                  addExcercise = {this.addExcercise}
                />
                <ul style = {style.container}>{excercises}</ul>
            </div>
        )
    }
}

export default connect((state) => {
    const excercises = mapToArray(state.excercises)
    const {formIsOpened, text, title, error} = state.newExcercise
    const { filters } = state
    const {selected} = filters
    const { from, to } = filters.dateRange

    const filteredExcercises = excercises.filter(excercise => {
        const published = Date.parse(excercise.date)
        return (!selected.length || selected.includes(excercise.id)) &&
            (!from || !to || (published > from && published < to))
    })
    return {
        excercises: filteredExcercises,
        formIsOpened, text, title, error
    }
}, {deleteExcercise, setExcerciseField, toggleNewExcerciseForm, addExcercise, checkExcerciseTitle})(accordion(ExcerciseList))
