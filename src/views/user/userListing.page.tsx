import React, { useEffect } from 'react'
import { Link, Prompt } from 'react-router-dom'
import { ROUTES } from '@constants'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { userActions } from '../../store/slices/user.slice'

const UserListingPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(userActions.fetchUsers())
  }, [])

  const users = useAppSelector((state) => state.user.users)

  return (
    <div>
      <h1>Welcome To User</h1>
      <hr />
      <h2>User List</h2>
      {users.map(({ id }) => {
        return (
          <Link key={id} to={ROUTES.USER_DETAIL(id)}>
            <div style={{ margin: '1rem' }}>User {id}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default UserListingPage
