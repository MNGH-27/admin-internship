'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Table } from '@atom/index'
import { useMutation, useQuery } from 'react-query'
import { RejectStudentModal, getTableData, RejectDescriptionModal } from './resources'
import { getInitialRegestrationStundets, putVarifyStudentInitialRegestration } from '@core/services'
import toast from 'react-hot-toast'

const StudentIntialRegistrationTable = () => {
   const searchParams = useSearchParams()

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
      mutationKey: ['verify_initial_registration'],
      mutationFn: (data) => putVarifyStudentInitialRegestration({ student_id: data.id }),
      onSuccess: () => {
         //show user verify successfully
         toast.success('دانشجو تایید شد')

         //refetch to get users data
         refetch()
      },
   })

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
            pagination={{}}
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
