import axios from 'axios'

export async function loginUserHttp({ username, password }) {
  const apiCall = await axios.post('https://bineshpro.ir/api/admin/login', {
    username,
    password,
  })

  return apiCall
}
