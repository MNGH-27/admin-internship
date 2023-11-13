import AxiosFetch from '@core/services/config/AxiosHttp'

export async function editEducationalTermsHttp({ name, end_date, start_date }, id) {
   try {
      const response = await AxiosFetch().put(`educational/terms/${id}`, {
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
