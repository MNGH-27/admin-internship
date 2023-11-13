import AxiosFetch from '@core/services/config/AxiosHttp'

export async function putUnVarifyStudentPreRegestration({ student_id, detail }) {
   try {
      const response = await AxiosFetch().put(`students/${student_id}/preReg/unverify`, {
         rejection_reason: detail,
      })

      return response.data
   } catch (error) {
      return error.response
   }
}
