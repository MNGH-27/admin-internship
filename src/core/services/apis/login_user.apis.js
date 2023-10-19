import axios from 'axios'

export async function loginUserHttp({ username, password }) {
  const apiCall = await axios.post('https://api.testsajad.ir/api/login', {
    username,
    password,
  })

  return apiCall
}
