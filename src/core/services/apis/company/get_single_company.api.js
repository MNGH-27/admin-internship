import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getSingleCompanyHttp({ id }) {
  try {
    const response = await AxiosFetch().get(`companies/${id}/edit`)

    if (response.status === 200) {
      return response.data
    }

    return Promise.reject(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
