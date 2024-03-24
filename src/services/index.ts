import type { AxiosResponse } from 'axios'

import http from './http'


export const getUserInfo = (data:any) => http.post(`/getUserInfo`, data)
