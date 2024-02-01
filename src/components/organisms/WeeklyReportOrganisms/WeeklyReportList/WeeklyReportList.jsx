'use client'

import { Button, Spinner, Table } from '@atom/index'
import { getSignleStudentWeeklyReportsHttp, putVerifySingleWeeklyReportHttp } from '@core/services'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { HEADER } from './resources'
import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

const WeeklyReportList = ({ userId }) => {
   const searchParams = useSearchParams()
   const pathName = usePathname()
   const { push } = useRouter()
   const queryClient = useQueryClient()

   const {
      isSuccess,
      data: singleStudentForm,
      isLoading,
      isError,
   } = useQuery({
      queryKey: ['single_student_form_stage', { userId, stage: 'weekly_reports' }],
      queryFn: () => getSignleStudentWeeklyReportsHttp(userId),
   })

   const { mutate: verifyUser, isLoading: isLoadingVerifyUser } = useMutation({
      mutationFn: putVerifySingleWeeklyReportHttp,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['single_student_form_stage'],
         })
         toast.success('گزارش هفتگی با موفقیت تایید شد')
      },
      onError: () => {
         toast.error('تایید گزارش هفتگی با مشکل مواجه شد')
      },
   })

   // Get a new searchParams string by merging the current
   // searchParams with a provided key/value pair
   const createQueryString = useCallback(
      ({ page }) => {
         const params = new URLSearchParams(searchParams)

         //add new search params
         params.set('page', page)

         return params.toString()
      },
      [searchParams],
   )

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
         <>
            <Button
               onClick={() => verifyUser(userId)}
               loading={isLoadingVerifyUser}
               className="my-5 py-3 h-auto"
               type="primary"
            >
               تایید گزارش هفتگی
            </Button>

            <Table
               rowKey={(record) => record.id}
               headerList={HEADER}
               data={singleStudentForm.data}
               pagination={{
                  pageSize: 10, // Set the number of items per page
                  total: singleStudentForm.meta?.total_records, // Set the total number of items
                  onChange: (page) => {
                     push(pathName + '?' + createQueryString({ page }))
                  },
               }}
            />
         </>
      )
}

export default WeeklyReportList
