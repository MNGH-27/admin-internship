import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getPreRegestrationDescriptionStundets(id) {
   try {
      const response = await AxiosFetch().get(`students/${id}/preReg/desc`)

      return response.data
   } catch (error) {
      return error.response
   }
}
