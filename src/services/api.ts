import axios from 'axios'

const api = axios.create({
  baseURL: 'https://zerolac-api.herokuapp.com',
})

export default api
