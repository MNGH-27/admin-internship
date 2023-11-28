import AxiosFetch from '@core/services/config/AxiosHttp'

export async function putVerifySingleFormHttp(id, formStage) {
   try {
      const response = await AxiosFetch().put(`students/forms/${id}/${formStage}/verify`)

      return response.data.data
   } catch (error) {
      return error.response
   }
}
