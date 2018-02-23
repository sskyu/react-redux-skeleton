import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    // SEE: https://github.com/zalmoxisus/redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default configureStore
