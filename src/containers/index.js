import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Counter from './counter'
import Hello from '../components/hello'

const Containers = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Hello />
        <Counter />
      </div>
    </Provider>
  )
}

Containers.propTypes = {
  store: PropTypes.object.isRequired
}

export default Containers
