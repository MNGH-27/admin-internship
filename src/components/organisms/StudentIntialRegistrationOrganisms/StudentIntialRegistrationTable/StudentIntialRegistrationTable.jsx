'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Spinner, Table } from '@atom/index'
import { useQuery } from 'react-query'
import {
  RejectStudentModal,
  getTableData,
  RejectDescriptionModal,
} from './resources'
import { getInitialRegestrationStundets } from '@core/services'

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

  const { data, isLoading } = useQuery({
    queryKey: ['initial_registration_list'],
    queryFn: getInitialRegestrationStundets,
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
        loading={isLoading}
        rowKey={(record) => record.id}
        headerList={getTableData(
          onOpenRejectModal,
          onOpenRejectDescriptionModal,
          searchParams.get('verified'),
        )}
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

export default StudentIntialRegistrationTable
