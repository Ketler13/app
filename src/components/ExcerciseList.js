import React, { Component, PropTypes } from 'react'
import { excercises } from '../fixtures'
import Excercise from './Excercise'
import NewExcerciseForm from './NewExcerciseForm'
import Filter from './Filters'
import UnloggedPage from './UnloggedPage'
import RaisedButton from 'material-ui/RaisedButton'
import accordion from '../decorators/accordion'
import { deleteExcercise, loadExcercises } from '../AC'
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
      this.props.userWasLoggedIn && this.props.toggleNewExcerciseForm();
    }

    setExcerciseField = field => ev => {
      this.props.userWasLoggedIn && this.props.setExcerciseField(field, ev.target.value)
    }

    checkExcerciseTitle = ev => {
      ev.target.value && this.props.checkExcerciseTitle(ev.target.value)
    }

    addExcercise = (title, text) => ev => {
      this.props.userWasLoggedIn && this.props.addExcercise(title, text)
      this.props.loadExcercises()
    }

    componentWillReceiveProps(nextProps) {
      !this.props.userWasLoggedIn && nextProps.userWasLoggedIn && nextProps.loadExcercises()
    }

    componentDidMount() {
      this.props.userWasLoggedIn && this.props.loadExcercises()
    }

    render() {
      if (this.props.userWasLoggedIn) {
        const {formIsOpened, title, text, error, titleIsChecked} = this.props
        let excercises
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

        if (!this.props.excercises.length) {
          excercises = <li style = {style.item}>
            Загружаем...
            Если Вы видите это сообщение уже некоторое время, возможно, у нас
            какие-то неполадки с сервером, либо не добавлено ни одного упражения.
          </li>
        } else {
          excercises = this.props.excercises.map(excercise => {
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
        }

        return (
            <div className = "excercises">
                <Filter/>
                <RaisedButton
                  label="Добавить упражнение"
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
      } else {
        return <UnloggedPage />
      }

    }
}

export default connect((state) => {
    const excercises = mapToArray(state.excercises)
    const {userWasLoggedIn} = state.login
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
        formIsOpened, text, title, error, userWasLoggedIn
    }
}, {
      deleteExcercise, setExcerciseField, toggleNewExcerciseForm, addExcercise,
      checkExcerciseTitle, loadExcercises
    })(accordion(ExcerciseList))
