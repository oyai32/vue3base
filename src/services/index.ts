import type { AxiosResponse } from 'axios'

import http from './http'


export const getUserInfo = (data:AxiosResponse) => http.post(`/getUserInfo`, data)
