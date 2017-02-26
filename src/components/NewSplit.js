import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'
import NewSplitTooltip from './NewSplitTooltip'
import DatePickerForm from './DatePickerForm'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { mapToArray, formatDate } from '../helpers'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         addSetInNewSplit, addSplit, openNewSplitModal, closeNewSplitModal,
         deleteExcerciseFromSelect
       } from '../AC/newSplitAC'

class NewSplit extends Component {
    openModal = modalName => () => {
        this.props.openNewSplitModal(modalName)
    }

    closeModal = modalName => () => {
        this.props.closeNewSplitModal(modalName)
    }

    closeSplitDetail = excercise => ev => {
        this.props.deleteExcerciseFromSelect(excercise)
    }

    handleDate = ev => {
        ev.preventDefault()
        this.props.selectDateForNewSplit(ev.target.value)
    }

    handleSelect = selected => {
        this.props.selectExcercisesForNewSplit(selected)
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { date, selected, addSplit, newSplitExcercises } = this.props
        const newSplit = mapToArray(newSplitExcercises)
        const formattedDate = formatDate(date)
        if (!date || !selected || !newSplit.length) return
        addSplit(formattedDate, newSplit)
    }

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.closeModal('EXCERCISE_SELECT')}
            />,
        ]
        const { excercises, date, selected, newSplitExcercises, addSetInNewSplit, deleteExcerciseFromSelect } = this.props
        const options = excercises.map(exc => ({
            label: exc.title,
            value: exc.id
        }))
        return (
            <div  className = "newSplit">
                <DatePickerForm
                    selectDateForNewSplit = {this.props.selectDateForNewSplit}
                    date = {date}
                />
                <RaisedButton label="Select excercises" onTouchTap={this.openModal('EXCERCISE_SELECT')} />
                <RaisedButton label="Add split" primary={true} onTouchTap = {this.onSubmit} />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.props.excerciseSelectIsOpen}
                    onRequestClose={this.closeModal('EXCERCISE_SELECT')}
                    autoScrollBodyContent={true}
                >
                    <Select
                        options={options}
                        value={selected}
                        multi={true}
                        onChange={this.handleSelect}
                    />
                </Dialog>
                <NewSplitTooltip
                    newSplitExcercises = {mapToArray(newSplitExcercises)}
                />
                <NewSplitDetails
                    selected = {selected}
                    addSetInNewSplit = {addSetInNewSplit}
                    closeSplitDetail = {this.closeSplitDetail}
                />
                <Snackbar
                    open={this.props.snackBarIsOpen}
                    message="Split added to your diary"
                    autoHideDuration={4000}
                />
            </div>
        )
    }
}

export default connect((state) => {
    const { date, selected, newSplitExcercises, excerciseSelectIsOpen, snackBarIsOpen } = state.newSplitState
    const excercises = mapToArray(state.excercises)
    return {
        excercises, date, selected, newSplitExcercises, excerciseSelectIsOpen,
        snackBarIsOpen
    }
}, {
    selectExcercisesForNewSplit,
    selectDateForNewSplit,
    addSetInNewSplit,
    addSplit,
    openNewSplitModal,
    closeNewSplitModal,
    deleteExcerciseFromSelect
})(NewSplit)
