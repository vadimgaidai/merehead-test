/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { useFormik } from 'formik'
import Form from '../../components/Form'
import Input from '../../components/Input'
import { section } from './createUser.module.scss'
import { maxLength } from '../../utils/validation'

const CreateUser = () => {
  const [isLoading, setLoading] = useState(false)

  const {
    handleSubmit,
    errors,
    initialValues,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      name: '',
    },
    validate({ name }) {
      if (maxLength(name, 15)) {
        return {
          name: maxLength(name, 15),
        }
      }
      return {}
    },
    async onSubmit(data, { resetForm }) {
      setLoading(true)
      try {
        await window.$api.users.setUser(data)
        resetForm({ ...initialValues })
      } catch (e) {
        console.error(e)
      }
      setLoading(false)
    },
  })
  return (
    <main className={section}>
      <Form
        title="Create new User"
        buttonValue="Create"
        loading={isLoading}
        onSubmit={handleSubmit}
      >
        <Input
          preloader="User name"
          label="Name"
          {...getFieldProps('name')}
          errorValue={touched.name && errors.name ? errors.name : ''}
          isReset={isLoading}
          id="name"
          name="name"
          type="text"
        />
      </Form>
    </main>
  )
}

export default CreateUser
