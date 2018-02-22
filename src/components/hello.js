import React from 'react'
import PropTypes from 'prop-types'

const Hello = ({ name = 'World' }) => {
  return <div className="hello">{`Hello ${name}`}</div>
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
