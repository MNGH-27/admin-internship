'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Table } from '@atom/index'

import { RejectStudentModal, getTableData, RejectDescriptionModal } from './resources'
import { useMutation, useQuery } from 'react-query'
import { getPreRegestrationStundets, putVarifyStudentPreRegestration } from '@core/services'
import { useQueryClient } from 'react-query'
import toast from 'react-hot-toast'

const StudentPreregistrationTable = () => {
   const queryClient = useQueryClient()

   const searchParams = useSearchParams()

   const [rejectModal, setRejectModal] = useState({
      isShow: false,
      data: {},
   })

   const [rejectDescriptionModal, setRejectDescriptionModal] = useState({
      isShow: false,
      data: {},
   })

   const { data, isLoading, isFetching } = useQuery({
      queryKey: ['pre_registration_list', searchParams.toString()],
      queryFn: () => getPreRegestrationStundets(searchParams.toString()),
   })

   const { mutate: verifyUser } = useMutation({
      mutationFn: (data) => putVarifyStudentPreRegestration({ student_id: data.id }),
      onSuccess: () => {
         //show user verify successfully
         toast.success('دانشجو تایید شد')

         //refetch to get users data
         queryClient.invalidateQueries({ queryKey: ['pre_registration_list'] })
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

export default StudentPreregistrationTable
