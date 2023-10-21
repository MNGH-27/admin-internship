import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getPreRegestrationStundets(filter) {
  try {
    const response = await AxiosFetch().get(`students/preReg?${filter}`)

    return response.data
  } catch (error) {
    return error.response
  }
}
