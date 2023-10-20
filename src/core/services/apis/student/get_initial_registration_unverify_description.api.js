import AxiosFetch from '@core/services/config/AxiosHttp'

export async function getInitialRegestrationUnverifyDescription(student_id) {
  try {
    const response = await AxiosFetch().get(
      `students/${student_id}/initReg/desc`,
    )

    return response.data
  } catch (error) {
    return error.response
  }
}
