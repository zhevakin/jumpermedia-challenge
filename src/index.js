import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import App from './containers/App/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './redux/store'
import createApi from './api/createApi'

const client = createApi()

ReactDOM.render(
  <Provider store={configureStore(client)}>
    <App/>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
