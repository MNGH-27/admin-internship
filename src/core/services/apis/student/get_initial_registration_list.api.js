import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getInitialRegestrationStundets(filter) {
  try {
    const response = await AxiosFetch().get(`students/initReg?${filter}`)

    return response.data
  } catch (error) {
    return error.response
  }
}
