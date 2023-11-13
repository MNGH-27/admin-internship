import AxiosFetch from '@core/services/config/AxiosHttp'

export async function editMasterHttp({
   first_name,
   last_name,
   email,
   national_code,
   personal_code,
   faculty_id,
   phone_number,
   id,
}) {
   try {
      const response = await AxiosFetch().put(`master/${id}`, {
         first_name,
         last_name,
         email,
         personal_code,
         national_code,
         phone_number,
         faculty_id,
      })

      if (response.status === 200) {
         return response.data
      }

      return Promise.reject(response.data)
   } catch (error) {
      return Promise.reject(error)
   }
}
