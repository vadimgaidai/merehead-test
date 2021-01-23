import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { LOAD_USERS } from '../../redux/actionTypes'

import Loading from '../../components/Loading'

import { section, caption, text } from './users.module.scss'
import User from '../../components/User'

const Trial = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((selector) => selector?.users)

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      await dispatch({ type: LOAD_USERS })
    })()
    setLoading(false)
  }, [dispatch])

  return (
    <main className={section}>
      <h1 className={caption}>Users page</h1>
      <Loading loading={isLoading}>
        {users.length ? (
          users.map(({ id, name }) => <User to={id} name={name} />)
        ) : (
          <p className={text}>No data :(</p>
        )}
      </Loading>
    </main>
  )
}

export default Trial
