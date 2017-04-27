import React, { Component, PropTypes } from 'react'
import store from '../store'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function App(props) {
    const style = {
        height: '100vh',
    }
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Provider store = {store}>
                <Paper style = {style} zDepth={1}>
                    <Menu>
                        <MenuItem name = "Добавить тренировку" path="/newsplit"/>
                        <MenuItem name = "Тренировки" path="/splits"/>
                        <MenuItem name = "Упражнения" path="/excercises"/>
                    </Menu>
                    {props.children}
                </Paper>
            </Provider>
        </MuiThemeProvider>
    )
}
