import { post } from './http'

export const getUserInfo = (data) => post(`/getUserInfo`, data)
