import React from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import Containers from './containers'

const store = configureStore()

render(<Containers store={store} />, document.querySelector('#content'))
