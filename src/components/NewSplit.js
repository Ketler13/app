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
import { mapToArray } from '../helpers'
import { selectExcercisesForNewSplit, selectDateForNewSplit,
         addSetInNewSplit, addSplit, openNewSplitModal, closeNewSplitModal
       } from '../AC/newSplitAC'

class NewSplit extends Component {
    state = {
        open: false,
    }

    handleOpen = modalName => () => {
        this.props.openNewSplitModal(modalName)
        this.setState({open: true});
    }

    handleClose = modalName => () => {
        this.props.closeNewSplitModal(modalName)
        this.setState({open: false});
    }

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose('EXCERCISE_SELECT')}
            />,
        ]
        const { excercises, date, selected, newSplitExcercises, addSetInNewSplit } = this.props
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
                <RaisedButton label="Select excercises" onTouchTap={this.handleOpen('EXCERCISE_SELECT')} />
                <RaisedButton label="Add split" primary={true} onTouchTap = {this.onSubmit} />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.props.excerciseSelectIsOpen}
                    onRequestClose={this.handleClose('EXCERCISE_SELECT')}
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
                />
                <Snackbar
                    open={this.props.snackBarIsOpen}
                    message="Split added to your diary"
                    autoHideDuration={4000}
                />
            </div>
        )
    }

    /*
        sets date value in reducer
    */
    handleDate = ev => {
        ev.preventDefault()
        this.props.selectDateForNewSplit(ev.target.value)
    }

    /*
        sets array of selected excercises in reducer
    */
    handleSelect = selected => {
        this.props.selectExcercisesForNewSplit(selected)
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { date, selected, addSplit, newSplitExcercises } = this.props
        const newSplit = mapToArray(newSplitExcercises)
        if (!date || !selected || !newSplit.length) return
        addSplit(date, newSplit)
    }
}

export default connect((state) => {
    const { date, selected, newSplitExcercises, excerciseSelectIsOpen, datePickerIsOpen, snackBarIsOpen } = state.newSplitState
    const excercises = mapToArray(state.excercises)
    return {
        excercises, date, selected, newSplitExcercises, excerciseSelectIsOpen,
        datePickerIsOpen, snackBarIsOpen
    }
}, {
    selectExcercisesForNewSplit,
    selectDateForNewSplit,
    addSetInNewSplit,
    addSplit,
    openNewSplitModal,
    closeNewSplitModal
})(NewSplit)
