import AxiosFetch from '@core/services/config/AxiosHttp'

export async function putVarifyStudentInitialRegestration({ student_id }) {
   try {
      const response = await AxiosFetch().put(`students/${student_id}/initReg/verify`, {})

      return response.data
   } catch (error) {
      return error.response
   }
}
