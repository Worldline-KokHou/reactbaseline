import { AxiosResponse } from 'axios'
import appClient from '@client'
import { IUser } from '../utils/type/user.type'

const fetchUsers = (): Promise<AxiosResponse<IUser[]>> => {
  return appClient.get('https://jsonplaceholder.typicode.com/users')
}

const fetchUserById = (id: number | string): Promise<AxiosResponse<IUser>> => {
  return appClient.get('https://jsonplaceholder.typicode.com/users/' + id)
}

export const UserService = { fetchUsers, fetchUserById }
