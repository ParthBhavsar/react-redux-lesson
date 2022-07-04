import Axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const getPeople = (id) => {
  const url = `${BASE_URL}/api/v1/people`
  return Axios.get(`${url}?id=${id}`)
}

export const getFeedExplorer = () => {
  const url = `${BASE_URL}/api/v1/feed/explorer`
  return Axios.get(url)
}

export default getPeople