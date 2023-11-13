import axios from 'axios'

export async function getUserInfoHttp(token) {
   try {
      const response = await axios.get('https://api.testsajad.ir/api/user', {
         headers: {
            Authorization: `Bearer ` + token,
         },
      })
      return response.data.user
   } catch (error) {
      return error.response
   }
}
