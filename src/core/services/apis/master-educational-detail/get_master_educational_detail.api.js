import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getMasterEducationalTermsListHttp(termId, filter = '') {
   try {
      const response = await AxiosFetch().get(`educational/terms/${termId}/masters?${filter}`)

      return response.data
   } catch (error) {
      return error.response
   }
}
