import AxiosFetch from '@core/services/config/AxiosHttp'

export async function putVerifySingleWeeklyReportHttp(id) {
   try {
      const response = await AxiosFetch().get(`students/weekly_reports/verify/${id}`)

      return response.data.data
   } catch (error) {
      return error.response
   }
}
