'use client'

import { Spinner } from '@atom/index'
import { getSignleStudentFormsHttp } from '@core/services'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

// eslint-disable-next-line no-unused-vars
const SingleStudentFormTemplate = () => {
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
      queryKey: ['single_student_form', { studentId }],
      queryFn: () => getSignleStudentFormsHttp(studentId),
   })

   if (isLoading) {
      return (
         <div className="flex items-center justify-center w-full">
            <Spinner />
         </div>
      )
   }

   const generateStatusText = (values) => {
      switch (Number(values)) {
         case 0:
            return 'موجود نیست'
         case 1:
            return 'بررسی نشده'
         case 2:
            return 'تایید شده'
         case 3:
            return 'رد شده'
      }
   }

   if (isSuccess)
      return (
         <div className="flex items-start justify-center flex-col gap-10 ">
            <div>
               <p className="text-2xl font-semibold flex items-center justify-start gap-2">
                  <span className="text-[#101114]">دانشجو</span>
                  <span className="text-[#5F5F61]">{singleStudentForm?.student?.full_name}</span>
               </p>
               <span className="text-xs text-[#5F5F61]">
                  {singleStudentForm?.student?.full_name} به شماره دانشجویی {singleStudentForm?.student?.student_number}{' '}
                  ورودی
                  {singleStudentForm?.student?.entrance_year} فرم های ذیل را برای تایید شدن پر کرده است.
               </span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
               <button
                  disabled={Number(singleStudentForm.form2.status) === 0}
                  onClick={() => push(`/dashboard/students/form/student-form/form2?studentId=${studentId}`)}
                  className={`${
                     Number(singleStudentForm.form2.status) === 0 ? 'cursor-default' : 'hover:border-[#4C526D]'
                  } flex flex-col items-center md:items-start justify-center gap-3 border-2 border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
               >
                  <span className="text-[#101114] font-bold">فرم شماره 2</span>
                  <div className="flex items-center gap-2 text-xs">
                     <span className="text-[#4C526D]">فرم شماره 2</span>
                     <span className={` rounded-md px-2 py-1`}>
                        {generateStatusText(singleStudentForm.form2.status)}
                     </span>
                  </div>
               </button>
               <button
                  disabled={Number(singleStudentForm.form3.status) === 0}
                  onClick={() => push(`/dashboard/students/form/student-form/form3?studentId=${studentId}`)}
                  className={`${
                     Number(singleStudentForm.form3.status) === 0 ? 'cursor-default' : 'hover:border-[#4C526D]'
                  } flex flex-col items-center md:items-start justify-center gap-3 border-2 border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
               >
                  <span className="text-[#101114] font-bold">فرم شماره 3</span>
                  <div className="flex items-center gap-2 text-xs">
                     <span className="text-[#4C526D]">فرم ارزیابی کارآموز</span>
                     <span className={` rounded-md px-2 py-1`}>
                        {generateStatusText(singleStudentForm.form3.status)}
                     </span>
                  </div>
               </button>
               <button
                  disabled={Number(singleStudentForm.form4.status) === 0}
                  onClick={() => push(`/dashboard/students/form/student-form/form4?studentId=${studentId}`)}
                  className={`${
                     Number(singleStudentForm.form4.status) === 0 ? 'cursor-default' : 'hover:border-[#4C526D]'
                  } flex flex-col items-center md:items-start justify-center gap-3 border-2 border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
               >
                  <span className="text-[#101114] font-bold">فرم شماره 4</span>
                  <div className="flex items-center gap-2 text-xs">
                     <span className="text-[#4C526D]">فرم ارزیابی محل کارآموزی</span>
                     <span className={` rounded-md px-2 py-1`}>
                        {generateStatusText(singleStudentForm.form4.status)}
                     </span>
                  </div>
               </button>
               <button
                  disabled={Number(singleStudentForm.weekly_reports.status) === 0}
                  onClick={() => push(`/dashboard/students/form/student-form/weekly_reports?studentId=${studentId}`)}
                  className={`${
                     Number(singleStudentForm.weekly_reports.status) === 0 ? 'cursor-default' : 'hover:border-[#4C526D]'
                  } flex flex-col items-center md:items-start justify-center gap-3 border-2 border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
               >
                  <span className="text-[#101114] font-bold">گزارش هفتگی</span>
                  <div className="flex items-center gap-2 text-xs">
                     <span className="text-[#4C526D]">فرم گزارش های هفتگی</span>
                     <span className={` rounded-md px-2 py-1`}>
                        {generateStatusText(singleStudentForm.weekly_reports.status)}
                     </span>
                  </div>
               </button>
               <button
                  onClick={() => push(`/dashboard/students/form/student-form/finish-internship?studentId=${studentId}`)}
                  href={`/dashboard/students/form/singleform`}
                  className={` flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
               >
                  <span className="text-[#101114] font-bold">نامه اتمام کارآموزی</span>
                  <div className="flex items-center gap-2 text-xs">
                     <span className="text-[#4C526D]">فرم نامه اتمام کارآموزی</span>
                     <span className={` rounded-md px-2 py-1`}>
                        {generateStatusText(singleStudentForm.form2.status)}
                     </span>
                  </div>
               </button>
            </div>
         </div>
      )
}

export default SingleStudentFormTemplate
