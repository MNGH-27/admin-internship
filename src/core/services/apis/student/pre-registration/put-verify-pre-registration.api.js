import AxiosFetch from '@core/services/config/AxiosHttp'

export async function putVarifyStudentPreRegestration({ student_id }) {
   try {
      const response = await AxiosFetch().put(`students/${student_id}/preReg/verify`, {})

      return response.data
   } catch (error) {
      return error.response
   }
}
