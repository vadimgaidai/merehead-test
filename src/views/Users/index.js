import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from 'react-js-pagination'

import { LOAD_USERS } from '../../redux/actionTypes'

import Loading from '../../components/Loading'

import { section, caption, grid, text } from './users.module.scss'
import User from '../../components/User'

const Trial = () => {
  const dispatch = useDispatch()
  const { users, pagination } = useSelector((selector) => selector?.users)

  const [isLoading, setLoading] = useState(true)

  const onLoadData = async (pageNumber = 1) => {
    setLoading(true)
    await dispatch({ type: LOAD_USERS, pageNumber })
    setLoading(false)
  }

  useEffect(() => {
    ;(async () => {
      await onLoadData()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangePage = (pageNumber) => {
    onLoadData(pageNumber)
  }

  return (
    <main className={section}>
      <h1 className={caption}>Users page</h1>
      <Loading loading={isLoading}>
        {users.length ? (
          <div className={grid}>
            {users.map(
              ({ id, first_name: firstName, last_name: lastName, avatar }) => (
                <User
                  key={id}
                  to={id}
                  firstName={firstName}
                  lastName={lastName}
                  image={avatar}
                />
              )
            )}
          </div>
        ) : (
          <p className={text}>No data :(</p>
        )}
        {users.length && (
          <Pagination
            activePage={pagination.page}
            itemsCountPerPage={pagination.perPage}
            totalItemsCount={pagination.total}
            pageRangeDisplayed={pagination.totalPages}
            activeClass="pagination__active"
            disabledClass="pagination__disabled"
            itemClass="pagination__item"
            linkClass="pagination__link"
            onChange={onChangePage}
          />
        )}
      </Loading>
    </main>
  )
}

export default Trial
