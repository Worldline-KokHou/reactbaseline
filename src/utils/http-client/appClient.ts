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

export default appClient
