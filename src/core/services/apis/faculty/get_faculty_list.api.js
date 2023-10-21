import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getfacultyListHttp(filter) {
  try {
    const response = await AxiosFetch().get(`students/faculty`)

    return response.data
  } catch (error) {
    return error.response
  }
}
