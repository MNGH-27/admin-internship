'use client'

import Link from 'next/link'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getSignleStudentFormsByStageHttp, putVerifySingleFormHttp } from '@core/services'
import { Button, Spinner } from '@atom/index'

import { IoReturnDownBack } from 'react-icons/io5'
import moment from 'moment-jalaali'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormFinishInternshipRejectModal } from '@organisms/FinishInternshipOrganisms'

const FinishInternshipTemplate = () => {
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
      isError,
      refetch,
   } = useQuery({
      queryKey: ['single_student_form_stage', { studentId, stage: 'finish_internship' }],
      queryFn: () => getSignleStudentFormsByStageHttp(studentId, 'finish_internship'),
   })

   const { mutate, isLoading: isSubmitting } = useMutation({
      mutationFn: () => putVerifySingleFormHttp(studentId, 'finish_internship'),
      onError: () => {
         toast.error('تایید فرم چهار با مشکل مواجه شد')
      },
      onSuccess: () => {
         toast.success('فرم چهار با موفقیت تایید شد')

         push(`/dashboard/students/form/student-form?studentId=${studentId}`)

         //refetch this user and also list of forms
         refetch()
         queryClient.invalidateQueries({ queryKey: ['single_student_form'] })
      },
   })

   console.log('singleStudentForm : ', singleStudentForm)

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
            <div className="flex flex-col items-center justify-center">
               <Link
                  type="primary"
                  className="ml-auto flex items-center justify-start gap-x-2 py-2 px-4 rounded-md bg-[#003B7E] text-white w-fit"
                  href={`/dashboard/students/form/student-form?studentId=${studentId}`}
               >
                  <IoReturnDownBack size={20} />
                  بازگشت
               </Link>
            </div>

            <div className="w-full text-[#101114] font-semibold flex flex-col items-start gap-3 my-5">
               <p>
                  <span>شماره: </span>
                  <span>{singleStudentForm.data.letter_number_end}</span>
               </p>
               <p>
                  <span>تاریخ: </span>
                  <span>{moment(singleStudentForm.data.letter_date_end).format('jYYYY/jMM/jDD')}</span>
               </p>
            </div>
            <div className="text-xl font-semibold text-[#101114]">
               <p className="mb-3">دانشگاه تربیت دبیر شهید رجایی</p>
               <p>موضوع: گواهی انجام کارآموزی {singleStudentForm.data.full_name}</p>
            </div>
            <p className="mt-7 mb-16 text-lg text-[#5F5F61]">
               با سلام <br />
               بازگشت به نامه شماره {singleStudentForm.data.letter_number_start} مورخ{' '}
               {moment(singleStudentForm.data.letter_date).format('jYYYY/jMM/jDD')} بدینوسیله گواهی می شود جناب{' '}
               {singleStudentForm.data.full_name} به شماره دانشجویی {singleStudentForm.data.student_number} از تاریخ{' '}
               {moment(singleStudentForm.data.internship_start_date).format('jYYYY/jMM/jDD')} لغایت{' '}
               {moment(singleStudentForm.data.internship_finish_date).format('jYYYY/jMM/jDD')} به مدت{' '}
               {singleStudentForm.data.duration} ساعت دوره کارآموزی خود را در شرکت {singleStudentForm.data.company} با
               موفقیت گذرانده است. <br />
               این گواهی بنا به درخواست نامبرده جهت ارائه به آن دانشگاه صادر گردیده و فاقد هرگونه اعتبار دیگری است.
            </p>
            <p className="flex flex-col items-end justify-center text-center my-36 text-xl text-[#101114]">
               <span className="font-semibold mb-4">{singleStudentForm.data.internship_supervisor}</span>
               <span>سرپرست کارآموزی در صنعت</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-5 w-full mb-10">
               <Button onClick={() => setIsShowRejectModal(true)} type="primary" className="!bg-[#E73F3F]">
                  {Number(singleStudentForm.data.status) === 3 ? 'مشاهده دلیل رد' : '   رد نامه اتمام اتمام کارآموزی'}
               </Button>

               <Button onClick={mutate} loading={isSubmitting} type="primary">
                  تایید نامه اتمام کارآموزی{' '}
               </Button>
            </div>

            <FormFinishInternshipRejectModal
               formStage={'finish_internship'}
               id={studentId}
               rejection_reason={''}
               status={singleStudentForm.status}
               isShow={isShowRejectModal}
               onClose={() => setIsShowRejectModal(false)}
            />
         </div>
      )
}

export default FinishInternshipTemplate
