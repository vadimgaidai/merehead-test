/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

import { Loader } from 'react-feather'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classes from './button.module.scss'
import Loading from '../Loading'

const { button, icon } = classes

const Button = ({
  children,
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
      type="button"
      onClick={onClickHandler}
    >
      <Loading loading={isLoading} size="15">
        <span>{children}</span>
      </Loading>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  typeButton: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  typeButton: 'default',
  onClick: () => {},
}

export default Button
