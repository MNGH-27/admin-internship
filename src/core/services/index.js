import { loginUserHttp } from './apis/login_user.apis'
import { getUserInfoHttp } from './apis/user/get_user_info.api'
import { getInitialRegestrationStundets } from './apis/student/initial-registration/get_initial_registration_list.api'
import { putUnVarifyStudentInitialRegestration } from './apis/student/initial-registration/put_unverify_student.api'
import { getEntranceYearOfStudentFilter } from './apis/student/get_entrance_year_student_filter.api'
import { getInitialRegestrationUnverifyDescription } from './apis/student/initial-registration/get_initial_registration_unverify_description.api'
import { putVarifyStudentInitialRegestration } from './apis/student/initial-registration/put_verify_student.api'
import { getPreRegestrationStundets } from './apis/student/pre-registration/get_pre_registration_list.api'
import { getMasterListHttp } from './apis/master/get_master_list.api'
import { createNewMasterHttp } from './apis/master/create_new_master.api'
import { getfacultyListHttp } from './apis/faculty/get_faculty_list.api'
import { getSingleMasterEditHttp } from './apis/master/get_single_master.api'
import { editMasterHttp } from './apis/master/edit_master.api'
import { deleteMasterHttp } from './apis/master/delete_master.api'
import { getCompaniesList } from './apis/company/get_company_list.api'
import { createNewComapanyHttp } from './apis/company/create_new_company.api'
import { deleteCompanyhttp } from './apis/company/delete_company.api'
import { getSingleCompanyHttp } from './apis/company/get_single_company.api'
import { getEducationalFacultiesListHttp } from './apis/educational-faculties/get_educational_faculties.api'
import { createNewFacultiesHttp } from './apis/educational-faculties/create_new_faculties.api'
import { editEducationalFacultiesHttp } from './apis/educational-faculties/edit_faculties.api'
import { deleteEducationalFacultiesHttp } from './apis/educational-faculties/delete_faculties.api'
import { getEducationalTermsListHttp } from './apis/educational-terms/get_educational_terms_list.api'
import { createNewTermsHttp } from './apis/educational-terms/create_new_educational_term.api'
import { editEducationalTermsHttp } from './apis/educational-terms/edit_educational_term.api'
import { deleteEducationalTermsHttp } from './apis/educational-terms/delete_educationl_terms.api'
import { getStudentEducationalTermsListHttp } from './apis/student-educational-detail/get_student_educational_detail.api'
import { getMasterEducationalTermsListHttp } from './apis/master-educational-detail/get_master_educational_detail.api'
import { putUnVarifyStudentPreRegestration } from './apis/student/pre-registration/put-unverify-pre-registration.api'
import { getPreRegestrationDescriptionStundets } from './apis/student/pre-registration/get-pre-registration-description.api'
import { getPreRegestrationUnverifyDescription } from './apis/student/pre-registration/get-pre-registration-unverify-description.api'
import { putVarifyStudentPreRegestration } from './apis/student/pre-registration/put-verify-pre-registration.api'
import { GetFormsListHttp } from './apis/student/forms/get_forms_list.api'
import { getSignleStudentFormsHttp } from './apis/student/forms/get_single_student_form.api'
import { getSignleStudentFormsByStageHttp } from './apis/student/forms/get_single_student_form_by_stage.api'
import { putVerifySingleFormHttp } from './apis/student/forms/verify_single_form.api'
import { putUnVerifySingleFormHttp } from './apis/student/forms/unverify_single_form.api'
import { deleteNewsHttp } from './apis/news/delete_news.api'
import { getSingleWeekReportHttp } from './apis/student/forms/get_single_week_report.api'
import { createNewNewsHttp } from './apis/news/create_new_news.api'
import { deleteNewsImageHttp } from './apis/news/delete_news_image.api'
import { editNewNewsHttp } from './apis/news/edit_news.api'
import { getSignleStudentWeeklyReportsHttp } from './apis/student/forms/get_weekly_report.api'
import { putVerifySingleWeeklyReportHttp } from './apis/student/forms/verify-weekly-report.api'
export {
   putVerifySingleWeeklyReportHttp,
   getSignleStudentWeeklyReportsHttp,
   editNewNewsHttp,
   deleteNewsImageHttp,
   createNewNewsHttp,
   deleteNewsHttp,
   getSingleWeekReportHttp,
   putUnVerifySingleFormHttp,
   putVerifySingleFormHttp,
   getSignleStudentFormsByStageHttp,
   getSignleStudentFormsHttp,
   GetFormsListHttp,
   putVarifyStudentPreRegestration,
   getPreRegestrationUnverifyDescription,
   putUnVarifyStudentPreRegestration,
   getPreRegestrationDescriptionStundets,
   getMasterEducationalTermsListHttp,
   getStudentEducationalTermsListHttp,
   deleteEducationalTermsHttp,
   editEducationalTermsHttp,
   createNewTermsHttp,
   getEducationalTermsListHttp,
   deleteEducationalFacultiesHttp,
   editEducationalFacultiesHttp,
   createNewFacultiesHttp,
   getEducationalFacultiesListHttp,
   getSingleCompanyHttp,
   deleteCompanyhttp,
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
