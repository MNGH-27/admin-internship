import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getPreRegestrationUnverifyDescription(student_id) {
   try {
      const response = await AxiosFetch().get(`students/${student_id}/preReg/rejectionDescription`)

      return response.data
   } catch (error) {
      return error.response
   }
}
