import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getStudentEducationalTermsListHttp(termId, filter = '') {
  try {
    const response = await AxiosFetch().get(
      `educational/terms/${termId}/students?${filter}`,
    )

    return response.data
  } catch (error) {
    return error.response
  }
}
