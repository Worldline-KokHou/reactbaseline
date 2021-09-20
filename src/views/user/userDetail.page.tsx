import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserDetailPage = () => {
  const locationStateLocation = useLocation()
  const params = useParams<{ id: string }>()
  const { id } = params
  console.log(locationStateLocation)
  console.log(params.id)
  return (
    <div>
      <h1>Welcome User {id}</h1>
    </div>
  )
}

export default UserDetailPage
