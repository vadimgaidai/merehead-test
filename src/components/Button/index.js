/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

import classes from './button.module.scss'
import Loading from '../Loading'

const { button, content } = classes

const Button = ({
  children,
  type = 'button',
  typeButton,
  disabled: isDisabled = false,
  loading: isLoading = false,
  onClick,
}) => {
  const onClickHandler = (event) => onClick(event)

  return (
    <button
      className={[button, classes[typeButton]].join(' ')}
      disabled={isLoading || isDisabled}
      type={type}
      onClick={onClickHandler}
    >
      <Loading loading={isLoading} size="18">
        <span className={content}>{children}</span>
      </Loading>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  loading: PropTypes.bool,
  typeButton: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  typeButton: 'default',
  onClick: () => {},
}

export default Button
