'use client'
import Link from 'next/link'
import { Spinner } from '@atom/index'
import { getSignleStudentFormsByStageHttp } from '@core/services'
import { StudentDetail } from '@organisms/FormFinalReportOrganisms'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import { useQuery } from 'react-query'

const FormFinalReportsTemplate = () => {
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
   } = useQuery({
      queryKey: ['single_student_form_stage', { studentId, stage: 'final_report' }],
      queryFn: () => getSignleStudentFormsByStageHttp(studentId, 'final_report'),
   })

   if (isLoading) {
      return (
         <div className="flex items-center justify-center w-full">
            <Spinner />
         </div>
      )
   }

   if (isSuccess)
      return (
         <div>
            <Link
               type="primary"
               className="mb-5 ml-auto flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
               href={`/dashboard/students/form/student-form?studentId=${studentId}`}
            >
               <IoReturnDownBack size={20} />
               بازگشت
            </Link>
            <p className="text-xl font-semibold mb-5">مشاهده ی گزارش نهایی دانشجو</p>
            <StudentDetail student={singleStudentForm.student} />
            <a
               className="bg-primary rounded-md text-white px-4 py-2"
               target="_blank"
               href={singleStudentForm.final_report}
               download
            >
               دریافت گزارش نهایی دانشجو
            </a>
         </div>
      )
}

export default FormFinalReportsTemplate
