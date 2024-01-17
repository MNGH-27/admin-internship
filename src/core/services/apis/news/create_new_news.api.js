import AxiosFetch from '@core/services/config/AxiosHttp'

export async function createNewNewsHttp({ title, body, image }) {
   try {
      const response = await AxiosFetch().postForm(`news`, {
         title,
         body,
         image,
      })

      if (response.status === 200) {
         return response.data
      }

      return Promise.reject(response.data)
   } catch (error) {
      return Promise.reject(error)
   }
}
