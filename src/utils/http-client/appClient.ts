import Axios from 'axios'
import { ENVIRONMENT } from '@constants'

const appClient = Axios.create({
  baseURL: ENVIRONMENT.baseUrl(),
  timeout: 60 * 1000, // 60 sec timeout
  headers: {
    'Content-Type': 'application/json'
  }
})

if (!ENVIRONMENT.isProduction()) {
  console.log('AppClient Configuration: ', appClient.defaults)
}

appClient.interceptors.response.use(
  (value) => {
    if (!ENVIRONMENT.isProduction()) {
      console.log('AppClient interceptors.response: ', value)
    }
    return value
  },
  (error) => {
    if (!ENVIRONMENT.isProduction()) {
      console.group('interceptors.response.onFail')
      console.warn(error)
      console.warn('JSON', error.toJSON())
      console.groupEnd()
    }

    return error
  }
)

appClient.interceptors.request.use((value) => {
  if (!ENVIRONMENT.isProduction()) {
    console.log('AppClient interceptors.request: ', value)
  }
  return value
})
export default appClient
