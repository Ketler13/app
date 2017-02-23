import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'

export default function App(props) {
    return (
        <Provider store = {store}>
            <div>
                <Menu>
                    <MenuItem name = "Add new split" path="/newsplit"/>
                    <MenuItem name = "Training diary" path="/splits"/>
                    <MenuItem name = "Excercises" path="/excercises"/>
                </Menu>
                {props.children}
            </div>
        </Provider>
    )
}
