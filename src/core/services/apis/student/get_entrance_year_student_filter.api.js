import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getEntranceYearOfStudentFilter(filter) {
  try {
    const response = await AxiosFetch().get(`students/entrance`)

    return response.data
  } catch (error) {
    return error.response
  }
}
