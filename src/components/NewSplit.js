import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import NewSplitDetails from './NewSplitDetails'
import NewSplitTooltip from './NewSplitTooltip'
import DatePickerForm from './DatePickerForm'
import CustomSelect from './CustomSelect'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { mapToArray, formatDate } from '../helpers'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         addSetInNewSplit, addSplit, openNewSplitModal, closeNewSplitModal,
         deleteExcerciseFromSelect,deleteExcerciseFromNewSplit
       } from '../AC/newSplitAC'

class NewSplit extends Component {
    static propTypes = {
        excercises: PropTypes.array.isRequired,
        date: PropTypes.object,
        selected: PropTypes.array,
        excerciseSelectIsOpen: PropTypes.bool,
        snackBarIsOpen: PropTypes.bool,
        addSetInNewSplit: PropTypes.func.isRequired,
        deleteExcerciseFromSelect: PropTypes.func.isRequired,
        openNewSplitModal: PropTypes.func,
        closeNewSplitModal: PropTypes.func,
        selectExcercisesForNewSplit: PropTypes.func,
        selectDateForNewSplit: PropTypes.func,
        addSplit: PropTypes.func,
        deleteExcerciseFromNewSplit: PropTypes.func
    }

    openModal = modalName => () => {
        this.props.openNewSplitModal(modalName)
    }

    closeModal = modalName => () => {
        this.props.closeNewSplitModal(modalName)
    }

    closeSplitDetail = excercise => ev => {
        this.props.deleteExcerciseFromSelect(excercise)
    }

    handleSelect = (selected, isExcerciseSelected) => ev => {
        if (isExcerciseSelected) {
            this.props.deleteExcerciseFromSelect(selected.label)
            return
        }
        this.props.selectExcercisesForNewSplit(selected)
    }

    deleteTooltip = name => () => {
        this.props.deleteExcerciseFromNewSplit(String(name))
    }

    onSubmit = ev => {
        ev.preventDefault()
        const { date, addSplit, newSplitExcercises } = this.props
        const newSplit = mapToArray(newSplitExcercises)
        const formattedDate = formatDate(date)
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
                <RaisedButton
                    label="Add split"
                    disabled = {
                        (!date || !selected || !newSplitExcercises.size) ?
                        true :
                        false
                    }
                    primary={
                        (!date || !selected || !newSplitExcercises.size) ?
                        false :
                        true
                    }
                    onTouchTap = {this.onSubmit}
                />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.props.excerciseSelectIsOpen}
                    onRequestClose={this.closeModal('EXCERCISE_SELECT')}
                    autoScrollBodyContent={true}
                >
                    <CustomSelect
                        excercises = {excercises}
                        selected = {selected}
                        handleSelect = {this.handleSelect}
                    />
                </Dialog>
                {
                    newSplitExcercises.size ?
                    <NewSplitTooltip
                        deleteTooltip = {this.deleteTooltip}
                        newSplitExcercises = {mapToArray(newSplitExcercises)}
                    /> :
                    null
                }
                {
                    selected.length ?
                    <NewSplitDetails
                        selected = {selected}
                        addSetInNewSplit = {addSetInNewSplit}
                        closeSplitDetail = {this.closeSplitDetail}
                    /> :
                    null
                }
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
    deleteExcerciseFromSelect,
    deleteExcerciseFromNewSplit
})(NewSplit)
