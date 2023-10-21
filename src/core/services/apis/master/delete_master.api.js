import AxiosFetch from '@core/services/config/AxiosHttp'

export async function deleteMasterHttp({ id }) {
  try {
    const response = await AxiosFetch().delete(`master/${id}`)

    if (response.status === 200) {
      return response.data
    }

    return Promise.reject(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
