import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import Routes from './main/routes'
import store from './main/store'


ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>


    , document.getElementById('app')
)

