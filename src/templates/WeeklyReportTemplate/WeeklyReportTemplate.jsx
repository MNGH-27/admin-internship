'use client'

import Link from 'next/link'
import { useQuery } from 'react-query'
import { getSignleStudentFormsByStageHttp } from '@core/services'
import { Spinner } from '@atom/index'

import { IoReturnDownBack } from 'react-icons/io5'
import { WeeklyReportList, WeeklyReportStudentDescription } from '@organisms/WeeklyReportOrganisms'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const WeeklyReportTemplate = () => {
   const searchParams = useSearchParams()
   const studentId = searchParams.get('studentId')

   const { push } = useRouter()

   useEffect(() => {
      if (!studentId || studentId?.length === 0) {
         push('/dashboard/students/forms')
      }
   }, [studentId])

   const {
      isSuccess,
      data: singleStudentForm,
      isLoading,
      isError,
   } = useQuery({
      queryKey: ['single_student_form_stage', { studentId, stage: 'weekly_reports' }],
      queryFn: () => getSignleStudentFormsByStageHttp(studentId, 'weekly_reports'),
   })

   if (isLoading) {
      return (
         <div className="flex items-center justify-center w-full">
            <Spinner />
         </div>
      )
   }

   if (isError) {
      return <span>دریافت اطلاعات با مشکل مواجه شده</span>
   }

   if (isSuccess)
      return (
         <div>
            <div className="flex flex-col items-center justify-center mb-8">
               <Link
                  type="primary"
                  className="ml-auto flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
                  href={`/dashboard/students/form/student-form?studentId=${studentId}`}
               >
                  <IoReturnDownBack size={20} />
                  بازگشت
               </Link>
            </div>

            <WeeklyReportStudentDescription
               company={singleStudentForm?.company}
               industry_supervisor={singleStudentForm?.industry_supervisor}
               student={singleStudentForm?.student}
            />

            <WeeklyReportList weeks={singleStudentForm?.weeks} userId={studentId} />
         </div>
      )
}

export default WeeklyReportTemplate
