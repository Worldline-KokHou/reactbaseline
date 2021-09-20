import { AxiosResponse } from 'axios'
import appClient from '@client'

export const getIp = (): Promise<AxiosResponse> => {
  return appClient.get('', {
    params: {
      format: 'json'
    }
  })
}
