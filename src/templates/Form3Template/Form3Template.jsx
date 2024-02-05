'use client'

import Link from 'next/link'
import { IoPerson, IoPersonAdd, IoPersonRemove, IoReturnDownBack } from 'react-icons/io5'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getSignleStudentFormsByStageHttp, putVerifySingleFormHttp } from '@core/services'
import { Button, Spinner } from '@atom/index'
import {
   Form3Evaluation,
   Form3RejectModal,
   Form3StudentDescription,
   Form3StudentPresense,
} from '@organisms/Form3Organisms'
import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Form3Template = () => {
   const [isShowRejectModal, setIsShowRejectModal] = useState(false)
   const queryClient = useQueryClient()

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
      refetch,
   } = useQuery({
      queryKey: ['single_student_form_stage', { studentId, stage: 'form3' }],
      queryFn: () => getSignleStudentFormsByStageHttp(studentId, 'form3'),
   })

   const { mutate, isLoading: isSubmitting } = useMutation({
      mutationFn: () => putVerifySingleFormHttp(studentId, 'form3'),
      onError: () => {
         toast.error('تایید فرم سه با مشکل مواجه شد')
      },
      onSuccess: () => {
         toast.success('فرم سه با موفقیت تایید شد')

         push(`/dashboard/students/form/student-form?studentId=${studentId}`)

         //refetch this user and also list of forms
         refetch()
         queryClient.invalidateQueries({ queryKey: ['single_student_form'] })
      },
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
            <div className="flex flex-col items-center justify-center">
               <Link
                  type="primary"
                  className="ml-auto flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
                  href={`/dashboard/students/form/student-form?studentId=${studentId}`}
               >
                  <IoReturnDownBack size={20} />
                  بازگشت
               </Link>
               {Number(singleStudentForm.data.status) === 1 ? (
                  <div className="w-full flex flex-col items-start justify-center gap-7 mb-16 mt-7">
                     <span className="flex items-center font-semibold gap-2 text-gray-700 text-sm">
                        <IoPerson size={20} />
                        وضعیت دانشجو تعیین نشده
                     </span>
                  </div>
               ) : Number(singleStudentForm.data.status) === 2 ? (
                  <div className="w-full flex flex-col items-start justify-center gap-7 mb-16 mt-7">
                     <span className="flex items-center font-semibold gap-2 text-green-700 text-sm">
                        <IoPersonAdd size={20} />
                        دانشجو در وضعیت تایید شده قرار دارد
                     </span>
                  </div>
               ) : (
                  <div className="w-full flex flex-col items-start justify-center gap-7 mb-16 mt-7">
                     <span className="flex items-center font-semibold gap-2 text-red-700 text-sm">
                        <IoPersonRemove size={20} />
                        دانشجو در وضعیت رد شده قرار دارد
                     </span>
                  </div>
               )}
            </div>

            <Form3StudentDescription
               company={singleStudentForm.data.company}
               student={singleStudentForm.data.student}
               industry_supervisor={singleStudentForm.data.industry_supervisor}
            />

            <Form3StudentPresense
               student_evaluations={singleStudentForm.data.student_evaluations}
               total_grade={singleStudentForm.data.total_grade}
            />

            <Form3Evaluation final_evaluation={singleStudentForm.data.final_evaluation} />

            <div className="flex flex-col sm:flex-row items-center justify-end gap-5 w-full mb-10">
               <Button onClick={() => setIsShowRejectModal(true)} type="primary" className="!bg-[#E73F3F]">
                  {Number(singleStudentForm.data.status) === 3 ? 'مشاهده دلیل رد' : 'رد فرم شماره 3'}
               </Button>

               <Button onClick={mutate} loading={isSubmitting} type="primary">
                  تایید فرم شماره 3
               </Button>
            </div>

            <Form3RejectModal
               formStage={'form3'}
               id={studentId}
               rejection_reason={''}
               status={singleStudentForm.data.status}
               isShow={isShowRejectModal}
               onClose={() => setIsShowRejectModal(false)}
            />
         </div>
      )
}

export default Form3Template
