/* eslint-disable no-useless-escape */
export function required(value) {
  if (!value) {
    return 'Required field'
  }
  return ''
}

export function email(value) {
  let error
  error = required(value)
  if (!error && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Enter a valid email address'
  }
  return error
}

export function phone(value) {
  let error
  error = required(value)
  if (
    !error &&
    !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)
  ) {
    error = 'Phone number is not valid'
  }
  return error
}

export function number(value) {
  let error
  error = required(value)
  if (!error && !/^\d*\.?\d*$/.test(value)) {
    error = 'Numbers only field'
  }
  return error
}

export function minLength(value, length) {
  let error
  error = required(value)
  if (value.length <= length) {
    error = `Must be at least ${length} character long`
  }
  return error
}

export function maxLength(value, length) {
  let error
  error = required(value)
  if (value.length >= length) {
    error = `Must be at most ${length} character long`
  }
  return error
}
