import axios from "axios"

export interface FetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '146081ce7b0d4565b63ea74ba3cd6d45'
  }
})