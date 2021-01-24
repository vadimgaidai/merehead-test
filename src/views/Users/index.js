import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from 'react-js-pagination'

import { LOAD_USERS } from '../../redux/actionTypes'

import Loading from '../../components/Loading'
import User from '../../components/User'

import { section, caption, grid, text } from './users.module.scss'

const Trial = () => {
  const dispatch = useDispatch()
  const { users, pagination } = useSelector((selector) => selector?.users)

  const onLoadData = async (pageNumber = 1) => {
    await dispatch({ type: LOAD_USERS, pageNumber })
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
      <Loading loading={users.length === 0}>
        {users.length > 0 ? (
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
