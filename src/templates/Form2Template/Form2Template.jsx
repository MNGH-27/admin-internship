'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Button, Spinner } from '@atom/index'
import { getSignleStudentFormsByStageHttp, putVerifySingleFormHttp } from '@core/services'
import {
   Form2AttendanceTable,
   Form2PerformanceTable,
   Form2RejectModal,
   Form2StudentDescription,
} from '@organisms/Form2Organisms'
import { IoPerson, IoPersonAdd, IoPersonRemove, IoReturnDownBack } from 'react-icons/io5'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const Form2Template = ({ id }) => {
   const [isShowRejectModal, setIsShowRejectModal] = useState(false)
   const queryClient = useQueryClient()

   const { push } = useRouter()

   const {
      isSuccess,
      data: singleStudentForm,
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ['single_student_form_stage', { id, stage: 'form2' }],
      queryFn: () => getSignleStudentFormsByStageHttp(id, 'form2'),
   })

   const { mutate, isLoading: isSubmitting } = useMutation({
      mutationFn: () => putVerifySingleFormHttp(id, 'form2'),
      onError: () => {
         toast.error('تایید فرم دو با مشکل مواجه شد')
      },
      onSuccess: () => {
         toast.success('فرم دو با موفقیت تایید شد')

         push(`/dashboard/students/form/${id}`)

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
                  href={`/dashboard/students/form/${id}`}
               >
                  <IoReturnDownBack size={20} />
                  بازگشت
               </Link>
               {Number(singleStudentForm.status) === 1 ? (
                  <div className="w-full flex flex-col items-start justify-center gap-7 mb-16 mt-7">
                     <span className="flex items-center font-semibold gap-2 text-gray-700 text-sm">
                        <IoPerson size={20} />
                        وضعیت دانشجو تعیین نشده
                     </span>
                  </div>
               ) : Number(singleStudentForm.status) === 2 ? (
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

            <Form2StudentDescription
               company={singleStudentForm.company}
               student={singleStudentForm.student}
               form2={singleStudentForm.form2}
               industry_supervisor={singleStudentForm.industry_supervisor}
            />

            <Form2AttendanceTable form2={singleStudentForm.form2} />

            <Form2PerformanceTable reports={singleStudentForm.reports} />

            <div className="flex flex-col sm:flex-row items-center justify-end gap-5 w-full mb-10">
               <Button onClick={() => setIsShowRejectModal(true)} type="primary" className="!bg-[#E73F3F]">
                  {Number(singleStudentForm.status) === 3 ? 'مشاهده دلیل رد' : 'رد فرم شماره 2'}
               </Button>

               <Button onClick={mutate} loading={isSubmitting} type="primary">
                  تایید فرم شماره 2
               </Button>
            </div>
            <Form2RejectModal
               formStage={'form2'}
               id={id}
               rejection_reason={singleStudentForm.form2.rejection_reason}
               status={singleStudentForm.status}
               isShow={isShowRejectModal}
               onClose={() => setIsShowRejectModal(false)}
            />
         </div>
      )
}

export default Form2Template
