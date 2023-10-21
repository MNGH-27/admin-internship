import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getMasterListHttp(filter = '') {
  try {
    const response = await AxiosFetch().get(`master?${filter}`)

    return response.data
  } catch (error) {
    return error.response
  }
}
