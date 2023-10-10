'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Table } from '@atom/index'

import {
  TABLE_HEADER,
  DUMMY_DATA,
  RejectStudentModal,
  getTableData,
  RejectDescriptionModal,
} from './resources'

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
        headerList={getTableData(
          onOpenRejectModal,
          onOpenRejectDescriptionModal,
          searchParams.get('verified'),
        )}
        data={DUMMY_DATA}
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
