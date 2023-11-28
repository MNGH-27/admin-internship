import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getSignleStudentFormsHttp(id) {
   try {
      const response = await AxiosFetch().get(`students/forms/${id}`)

      return response.data.data
   } catch (error) {
      return error.response
   }
}
