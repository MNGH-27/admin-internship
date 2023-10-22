import { loginUserHttp } from './apis/login_user.apis'
import { getUserInfoHttp } from './apis/user/get_user_info.api'
import { getInitialRegestrationStundets } from './apis/student/get_initial_registration_list.api'
import { putUnVarifyStudentInitialRegestration } from './apis/student/put_unverify_student.api'
import { getEntranceYearOfStudentFilter } from './apis/student/get_entrance_year_student_filter.api'
import { getInitialRegestrationUnverifyDescription } from './apis/student/get_initial_registration_unverify_description.api'
import { putVarifyStudentInitialRegestration } from './apis/student/put_verify_student.api'
import { getPreRegestrationStundets } from './apis/student/get_pre_registration_list.api'
import { getMasterListHttp } from './apis/master/get_master_list.api'
import { createNewMasterHttp } from './apis/master/create_new_master.api'
import { getfacultyListHttp } from './apis/faculty/get_faculty_list.api'
import { getSingleMasterEditHttp } from './apis/master/get_single_master.api'
import { editMasterHttp } from './apis/master/edit_master.api'
import { deleteMasterHttp } from './apis/master/delete_master.api'
import { getCompaniesList } from './apis/company/get_company_list.api'
import { createNewComapanyHttp } from './apis/company/create_new_company.api'
export {
  createNewComapanyHttp,
  getCompaniesList,
  deleteMasterHttp,
  editMasterHttp,
  getSingleMasterEditHttp,
  getfacultyListHttp,
  createNewMasterHttp,
  getMasterListHttp,
  getPreRegestrationStundets,
  putVarifyStudentInitialRegestration,
  getInitialRegestrationUnverifyDescription,
  getEntranceYearOfStudentFilter,
  getInitialRegestrationStundets,
  putUnVarifyStudentInitialRegestration,
  loginUserHttp,
  getUserInfoHttp,
}
