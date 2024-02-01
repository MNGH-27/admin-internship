import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getSignleStudentWeeklyReportsHttp(id) {
   try {
      const response = await AxiosFetch().get(`students/weekly_reports?student_id=${id}`)

      return response.data
   } catch (error) {
      return error.response
   }
}
