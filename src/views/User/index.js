import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_USER } from '../../redux/actionTypes'
import { setUser } from '../../redux/modules/users'
import {} from './user.module.scss'

const User = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((selector) => selector?.users)

  useEffect(() => {
    ;(async () => {
      await dispatch({ type: LOAD_USER })
    })()
    return () => dispatch(setUser({}))
  }, [dispatch])
  return <div />
}

export default User
