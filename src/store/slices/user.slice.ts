import { IUser } from '../../utils/type/user.type'
import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  users: IUser[]
}

const initialState: UserState = Object.freeze({
  users: []
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const userActions = userSlice.actions
export default userSlice.reducer
