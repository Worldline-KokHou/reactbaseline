import { Prompt, useHistory, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { userActions } from '../../store/slices/user.slice'
import React, { useEffect } from 'react'

const UserDetailPage = () => {
  const history = useHistory()
  const params = useParams<{ id: string }>()
  const { id } = params

  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.userDetail)

  useEffect(() => {
    dispatch(userActions.fetchUserById(id))
  }, [])

  function renderObject(o: object): any {
    return Object.entries(o).map(([key, value]) => {
      if (typeof value === 'object') {
        return renderObject(value)
      } else {
        return (
          <div key={key}>
            {key}: {String(value)}
          </div>
        )
      }
    })
  }
  return (
    <div>
      <h1>Welcome User {id}</h1>
      <button onClick={history.goBack}>GO BACK</button>
      {user && renderObject(user)}
      <Prompt message={'Are you sure wan to go back?'} />
    </div>
  )
}

export default UserDetailPage
