/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { RotateCw, Trash2 } from 'react-feather'

import { LOAD_USER } from '../../redux/actionTypes'
import { setUser } from '../../redux/modules/users'

import { email, maxLength } from '../../utils/validation'

import Loading from '../../components/Loading'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { section, content, buttons, buttonContent } from './user.module.scss'

const User = () => {
  const history = useHistory()
  const { id: userId } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((selector) => selector?.users)

  const [isLoading, setLoading] = useState(true)

  const [isDeleteLoading, setDeleteLoading] = useState(false)

  const onLoadData = async () => {
    setLoading(true)
    await dispatch({ type: LOAD_USER, userId })
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      await onLoadData()
    })()
    setLoading(false)
    return () => dispatch(setUser({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik(
    {
      enableReinitialize: true,
      initialValues: { ...user },
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
      async onSubmit(data) {
        setLoading(true)
        try {
          await window.$api.users.changeUser(userId, data)
          await onLoadData()
          resetForm({ ...user })
        } catch (e) {
          console.error(e)
        }
      },
    }
  )

  const onDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm('Delete this user')
    if (isDelete) {
      setDeleteLoading(true)
      try {
        await window.$api.users.deleteUser(userId)
        history.push('/')
      } catch (e) {
        console.error(e)
      }
      setDeleteLoading(false)
    }
  }

  return (
    <main className={section}>
      <Loading loading={isLoading}>
        <div className={content}>
          <Form
            title={`${user.first_name} ${user.last_name}`}
            buttonValue=" Change user"
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
          <div className={buttons}>
            <Button typeButton="primary" onClick={() => resetForm({ ...user })}>
              <span className={buttonContent}>
                Reset data <RotateCw />
              </span>
            </Button>
            <Button
              typeButton="alert"
              loading={isDeleteLoading}
              onClick={onDelete}
            >
              <span className={buttonContent}>
                Delete User <Trash2 />
              </span>
            </Button>
          </div>
        </div>
      </Loading>
    </main>
  )
}

export default User
