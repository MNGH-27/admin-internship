import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getCompaniesList(filter = '') {
   try {
      const response = await AxiosFetch().get(`companies?${filter}`)

      if (response.status === 200) {
         return response.data
      }

      return Promise.reject(response.data)
   } catch (error) {
      return Promise.reject(error)
   }
}
