import { IUser } from '../../utils/type/user.type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserService } from '../../services/user.service'

interface UserState {
  users: IUser[]
  userDetail?: IUser
}

const initialState: UserState = Object.freeze({
  users: [],
  userDetail: undefined
})

const fetchUsers = createAsyncThunk('user/fetchUsers', async (arg, thunkAPI) => {
  const { data } = await UserService.fetchUsers()
  return data
})
const fetchUserById = createAsyncThunk<IUser, string | number>('user/fetchUserById', async (userId, thunkAPI) => {
  const { data } = await UserService.fetchUserById(userId)
  return data
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(fetchUsers.pending, (state) => {
        state.users = initialState.users
      })
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.userDetail = action.payload
      })
      .addCase(fetchUserById.pending, (state, action) => {
        state.userDetail = initialState.userDetail
      })
  }
})

export const userActions = {
  ...userSlice.actions,
  fetchUsers,
  fetchUserById
}
export default userSlice.reducer
