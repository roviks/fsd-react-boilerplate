import axios from 'axios'

import { API_URL, JSONPLACEHOLDER_API_URL } from '../config'

export const apiInstance = axios.create({
  baseURL: API_URL,
})

export const jsonApiInstance = axios.create({
  baseURL: JSONPLACEHOLDER_API_URL,
})
