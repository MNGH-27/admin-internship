import AxiosFetch from '@core/services/config/AxiosHttp'

export async function GetFormsListHttp(filter) {
   try {
      const response = await AxiosFetch().get(`students/forms?${filter}`)

      return response.data
   } catch (error) {
      return error.response
   }
}
