import AxiosFetch from '@core/services/config/AxiosHttp'

export async function createNewTermsHttp({ name, end_date, start_date }) {
   try {
      const response = await AxiosFetch().post(`educational/terms`, {
         name,
         end_date,
         start_date,
      })

      if (response.status === 200) {
         return response.data
      }

      return Promise.reject(response.data)
   } catch (error) {
      return Promise.reject(error)
   }
}
