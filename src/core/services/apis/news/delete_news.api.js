import AxiosFetch from '@core/services/config/AxiosHttp'

export async function deleteNewsHttp({ id }) {
   try {
      const response = await AxiosFetch().delete(`news/${id}`)

      if (response.status === 200) {
         return response.data
      }

      return Promise.reject(response.data)
   } catch (error) {
      return Promise.reject(error)
   }
}
