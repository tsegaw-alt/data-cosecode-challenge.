import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getTodos = async () => {
  const { data } = await axios.get(`${BASE_URL}/todos`)
  return data
}

export const getUser = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`)
  return data
}
