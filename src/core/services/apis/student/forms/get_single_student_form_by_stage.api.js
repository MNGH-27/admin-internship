import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getSignleStudentFormsByStageHttp(id, formStage) {
   try {
      const response = await AxiosFetch().get(`students/forms/${id}/${formStage}`)

      return response.data
   } catch (error) {
      return error.response
   }
}
