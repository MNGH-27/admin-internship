import AxiosFetch from '@core/services/config/AxiosHttp'

export async function putUnVerifySingleFormHttp({ id, formStage, rejection_reason }) {
   try {
      const response = await AxiosFetch().put(`students/forms/${id}/${formStage}/unverify`, { rejection_reason })

      return response.data.data
   } catch (error) {
      return error.response
   }
}
