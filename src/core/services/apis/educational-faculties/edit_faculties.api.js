import AxiosFetch from '@core/services/config/AxiosHttp'

export async function editEducationalFacultiesHttp({ name, id }) {
   try {
      const response = await AxiosFetch().put(`educational/faculties/${id}`, {
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
