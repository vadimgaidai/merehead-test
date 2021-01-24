/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { useFormik } from 'formik'
import Form from '../../components/Form'
import Input from '../../components/Input'
import { section } from './createUser.module.scss'
import { email, maxLength } from '../../utils/validation'

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
      first_name: '',
      last_name: '',
      email: '',
    },
    validate({
      first_name: firstName,
      last_name: lastName,
      email: emailValue,
    }) {
      if (
        maxLength(firstName, 15) ||
        maxLength(lastName, 15) ||
        email(emailValue)
      ) {
        return {
          first_name: maxLength(firstName, 15),
          last_name: maxLength(lastName, 15),
          email: email(emailValue),
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
          preloader="User first name"
          label="First name"
          {...getFieldProps('first_name')}
          errorValue={
            touched.first_name && errors.first_name ? errors.first_name : ''
          }
          isReset={isLoading}
          id="first_name"
          name="first_name"
          type="text"
        />
        <Input
          preloader="User last name"
          label="Last name"
          {...getFieldProps('last_name')}
          errorValue={
            touched.last_name && errors.last_name ? errors.last_name : ''
          }
          isReset={isLoading}
          id="last_name"
          name="last_name"
          type="text"
        />
        <Input
          preloader="User email"
          label="Email"
          {...getFieldProps('email')}
          errorValue={touched.email && errors.email ? errors.email : ''}
          isReset={isLoading}
          id="email"
          name="email"
          type="email"
        />
      </Form>
    </main>
  )
}

export default CreateUser
