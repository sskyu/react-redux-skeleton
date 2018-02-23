import { handleActions } from 'redux-actions'
import { increment, decrement } from '../actions/app'

const initialState = {
  count: 0
}

const handleIncrement = state => {
  return {
    ...state,
    count: state.count + 1
  }
}

const handleDecrement = state => {
  return {
    ...state,
    count: state.count - 1
  }
}

export default handleActions(
  {
    [increment]: handleIncrement,
    [decrement]: handleDecrement
  },
  initialState
)
