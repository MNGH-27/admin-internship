import axios from 'axios'

export async function loginUserHttp({ username, password }) {
   const apiCall = await axios.post('https://api.sru-intern.ir/api/login', {
      username,
      password,
   })

   return apiCall
}
