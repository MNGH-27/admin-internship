'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Table } from '@atom/index'

import {
  DUMMY_DATA,
  RejectStudentModal,
  getTableData,
  RejectDescriptionModal,
} from './resources'
import { useQuery } from 'react-query'
import { getPreRegestrationStundets } from '@core/services'

const StudentPreregistrationTable = () => {
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
    queryFn: () => getPreRegestrationStundets(searchParams.toString()),
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
