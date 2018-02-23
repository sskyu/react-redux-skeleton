import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/app'

const mapStateToProps = state => ({
  count: state.app.count
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(appActions.increment, dispatch),
  decrement: bindActionCreators(appActions.decrement, dispatch)
})

class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  static defaultProps = {
    count: 0
  }

  handleIncrement = () => {
    const { increment } = this.props

    increment()
  }

  handleDecrement = () => {
    const { decrement } = this.props

    decrement()
  }

  render () {
    const { count } = this.props

    return (
      <div>
        <div>{count}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
