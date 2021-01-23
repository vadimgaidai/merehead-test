import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Trash2 } from 'react-feather'

import { LOAD_USER } from '../../redux/actionTypes'
import { setUser } from '../../redux/modules/users'

import Button from '../../components/Button'
import Loading from '../../components/Loading'

import { section, buttons, buttonContent } from './user.module.scss'

const User = () => {
  const { id: userId } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((selector) => selector?.users)

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      await dispatch({ type: LOAD_USER, userId })
    })()
    setLoading(false)
    return () => dispatch(setUser({}))
  }, [dispatch, userId])

  return (
    <main className={section}>
      <Loading loading={isLoading}>
        <div className={buttons}>
          <Button loading={isLoading} typeButton="primary">
            Change user
          </Button>
          <Button typeButton="alert">
            <span className={buttonContent}>
              Delete User <Trash2 />
            </span>
          </Button>
        </div>
        <p>asd</p>
      </Loading>
    </main>
  )
}

export default User
