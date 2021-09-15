import { AxiosResponse } from 'axios'
import appClient from '@client'

const getIp = (): Promise<AxiosResponse> => {
  return appClient.get('', {
    params: {
      format: 'json'
    }
  })
}

export { getIp }
