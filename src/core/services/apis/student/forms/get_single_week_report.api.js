import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getSingleWeekReportHttp(id, formId) {
   try {
      const response = await AxiosFetch().get(`students/forms/${id}/weekly_reports/${formId}`)

      return response.data.data
   } catch (error) {
      return error.response
   }
}
