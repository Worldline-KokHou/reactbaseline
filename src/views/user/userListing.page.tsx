import React from 'react'
import { Link, Prompt } from 'react-router-dom'
import { ROUTES } from '@constants'

const UserListingPage = () => {
  const userIds = [1, 2, 3, 4, 5]

  return (
    <div>
      <h1>Welcome To User</h1>
      <hr />
      <h2>User List</h2>
      {userIds.map((id) => {
        return (
          <Link key={id} to={ROUTES.USER_DETAIL(id)}>
            User {id}
          </Link>
        )
      })}

      <Prompt message={'Are Your Sure'} />
    </div>
  )
}

export default UserListingPage
