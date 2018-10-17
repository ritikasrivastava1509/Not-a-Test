import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import './styles.css'

import rootReducer from './state/reducers'

const state = createStore(rootReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
