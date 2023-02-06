import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from 'react-router-dom'
import App from './App'
import history from './history'
import './index.scss'

const app =  (
        <Router history={history}>
            <App />
        </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
