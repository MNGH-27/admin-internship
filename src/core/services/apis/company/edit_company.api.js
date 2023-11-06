import AxiosFetch from '@core/services/config/AxiosHttp'

export async function editComapanyHttp(
   {
      company_address,
      company_category,
      company_name,
      company_number,
      company_phone,
      company_postal_code,
      company_registry_code,
      company_type,
      first_name,
      last_name,
      email,
      national_code,
      phone_number,
      username,
      faculty_id,
   },
   companyId,
) {
   try {
      const response = await AxiosFetch().put(`companies/${companyId}`, {
         company_address,
         company_category,
         company_name,
         company_number,
         company_phone,
         company_postal_code,
         company_registry_code,
         company_type,
         first_name,
         last_name,
         email,
         national_code,
         phone_number,
         username,
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
