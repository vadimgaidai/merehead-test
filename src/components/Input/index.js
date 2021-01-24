import React, { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import {
  label,
  text,
  container,
  input,
  inputError,
  error,
} from './input.module.scss'

const Input = ({
  preloader,
  type,
  label: labelValue,
  value,
  name,
  isReset,
  errorValue,
  onChange,
}) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isReset) {
      inputRef.current.value = ''
    }
  }, [isReset])

  useEffect(() => {
    inputRef.current.value = value
  }, [value])

  const onChangeHandler = (event) => {
    event.preventDefault()
    onChange(event)
  }

  return (
    <label className={label}>
      <p className={text}>{labelValue}</p>
      <div className={container}>
        <input
          ref={inputRef}
          className={[input, errorValue && inputError].join(' ')}
          type={type}
          placeholder={preloader}
          name={name}
          defaultValue={value}
          onChange={onChangeHandler}
        />
      </div>
      <CSSTransition in={!!errorValue} classNames="fade" timeout={300}>
        <span className={error}>{errorValue}</span>
      </CSSTransition>
    </label>
  )
}

Input.propTypes = {
  preloader: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  name: PropTypes.string.isRequired,
  isReset: PropTypes.bool,
  errorValue: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  value: '',
  onChange: () => {},
}

export default Input
