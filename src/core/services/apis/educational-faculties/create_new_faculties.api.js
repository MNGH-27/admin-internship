import AxiosFetch from '@core/services/config/AxiosHttp'

export async function createNewFacultiesHttp({ name }) {
  try {
    const response = await AxiosFetch().post(`educational/faculties`, {
      name,
    })

    if (response.status === 200) {
      return response.data
    }

    return Promise.reject(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
