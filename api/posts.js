import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`)
  return data
}

export const getUser = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`)
  return data
}
