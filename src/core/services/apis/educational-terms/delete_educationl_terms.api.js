import AxiosFetch from '@core/services/config/AxiosHttp'

export async function deleteEducationalTermsHttp({ id }) {
  try {
    const response = await AxiosFetch().delete(`educational/terms/${id}`)

    if (response.status === 200) {
      return response.data
    }

    return Promise.reject(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
