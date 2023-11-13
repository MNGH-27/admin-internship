import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getEducationalFacultiesListHttp(filter = '') {
   try {
      const response = await AxiosFetch().get(`educational/faculties?${filter}`)

      return response.data
   } catch (error) {
      return error.response
   }
}
