import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getEducationalTermsListHttp(filter = '') {
   try {
      const response = await AxiosFetch().get(`educational/terms?${filter}`)

      return response.data
   } catch (error) {
      return error.response
   }
}
