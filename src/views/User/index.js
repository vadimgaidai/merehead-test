import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import { LOAD_USER } from '../../redux/actionTypes'
import { setUser } from '../../redux/modules/users'
import {} from './user.module.scss'

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
    <Loading loading={isLoading}>
      <main>
        <Button loading={isLoading}>Change user</Button>
        <Button>Delete User</Button>
      </main>
    </Loading>
  )
}

export default User
