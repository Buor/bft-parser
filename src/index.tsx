import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {store} from "./src/reduxToolkit/store"
import './src/styles/reset.css'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

//todo remove

// document.addEventListener('keydown', (e) => {
//     if(e.key === 's') {
//         console.log(store.getState())
//     }
// })