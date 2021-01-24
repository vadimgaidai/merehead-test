import PropTypes from 'prop-types'

import Button from '../Button'

import { form, title } from './form.module.scss'

const Form = ({
  title: tileValue,
  children,
  typeButton = 'success',
  buttonValue,
  onSubmit,
  loading: isLoading,
}) => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form className={form} onSubmit={onSubmitHandler}>
      <h2 className={title}>{tileValue}</h2>
      <div>{children}</div>
      <Button type="submit" typeButton={typeButton} loading={isLoading}>
        {buttonValue}
      </Button>
    </form>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  buttonValue: PropTypes.string.isRequired,
  typeButton: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
}

export default Form
