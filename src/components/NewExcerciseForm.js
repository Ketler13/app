import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const NewExcerciseForm = ({
  text, title, error, isOpen, closeForm, setField, addExcercise, checkTitle
                                                                        }) => {

  const actions = [
      <FlatButton
          label="Ok"
          primary={true}
          keyboardFocused={true}
          onTouchTap={addExcercise(title, text)}
      />,
  ]

  return (
    <Dialog
        actions={actions}
        modal={false}
        open={isOpen}
        onRequestClose={closeForm}
        autoScrollBodyContent={true}
    >
      <TextField
        id="excerciseTitle"
        value={title}
        onChange={setField('title')}
        fullWidth = {true}
        hintText="Title"
        errorText={error}
        onBlur = {checkTitle}
      />
      <br/>
      <TextField
        id="excerciseText"
        value={text}
        onChange={setField('text')}
        fullWidth = {true}
        hintText="Text"
      />
    </Dialog>
  )
}

export default NewExcerciseForm
