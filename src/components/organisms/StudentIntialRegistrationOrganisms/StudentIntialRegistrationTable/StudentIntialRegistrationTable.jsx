'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

import { Table } from '@atom/index'
import { useMutation, useQuery } from 'react-query'
import { RejectStudentModal, getTableData, RejectDescriptionModal } from './resources'
import { getInitialRegestrationStundets, putVarifyStudentInitialRegestration } from '@core/services'
import toast from 'react-hot-toast'

const StudentIntialRegistrationTable = () => {
   const searchParams = useSearchParams()
   const { push } = useRouter()
   const pathName = usePathname()

   const [rejectModal, setRejectModal] = useState({
      isShow: false,
      data: {},
   })
   const [rejectDescriptionModal, setRejectDescriptionModal] = useState({
      isShow: false,
      data: {},
   })

   const { data, isLoading, isFetching, refetch } = useQuery({
      queryKey: ['initial_registration_list', searchParams.toString()],
      queryFn: () => getInitialRegestrationStundets(searchParams.toString()),
      staleTime: 0,
      cacheTime: 0,
   })

   const { mutate: verifyUser } = useMutation({
      mutationFn: (data) => putVarifyStudentInitialRegestration({ student_id: data.id }),
      onSuccess: () => {
         //show user verify successfully
         toast.success('دانشجو تایید شد')

         //refetch to get users data
         refetch()
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

   const onOpenRejectModal = (data) => {
      setRejectModal({
         isShow: true,
         data,
      })
   }

   const onOpenRejectDescriptionModal = (data) => {
      setRejectDescriptionModal({
         isShow: true,
         data,
      })
   }

   return (
      <>
         <Table
            loading={isLoading || isFetching}
            rowKey={(record) => record.id}
            headerList={getTableData(
               onOpenRejectModal,
               onOpenRejectDescriptionModal,
               verifyUser,
               searchParams.get('verified'),
            )}
            pagination={{
               pageSize: 5, // Set the number of items per page
               total: data?.meta?.total_records, // Set the total number of items
               onChange: (page) => {
                  push(pathName + '?' + createQueryString({ page }))
               },
            }}
            data={data?.data?.students}
         />

         <RejectStudentModal
            refetch={refetch}
            isShow={rejectModal.isShow}
            data={rejectModal.data}
            onClose={() => setRejectModal({ isShow: false })}
         />

         <RejectDescriptionModal
            isShow={rejectDescriptionModal.isShow}
            data={rejectDescriptionModal.data}
            onClose={() => setRejectDescriptionModal({ isShow: false })}
         />
      </>
   )
}

export default StudentIntialRegistrationTable
