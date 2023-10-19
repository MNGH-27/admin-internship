import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getStudentHomeHttp() {
  try {
    const response = await AxiosFetch().get(`students/home`)

    return response.data.data
  } catch (error) {
    return error.response
  }
}
