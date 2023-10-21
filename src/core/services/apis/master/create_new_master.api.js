import AxiosFetch from '@core/services/config/AxiosHttp'

export async function createNewMasterHttp({
  first_name,
  last_name,
  email,
  national_code,
  personal_code,
  faculty,
  phone_number,
}) {
  const apiCall = await AxiosFetch().post(`master`, {
    first_name,
    last_name,
    email,
    personal_code,
    national_code,
    phone_number,
    faculty_id: faculty.id,
  })

  return apiCall
}
