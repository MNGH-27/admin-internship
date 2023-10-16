'use client'

import { useState } from 'react'

import { Table } from '@atom/index'

import {
  DUMMY_DATA,
  getTableData,
  EditTermsModal,
  RemoveTermsModal,
} from './resources'

const TermsTable = () => {
  const [isShowEditTermsModal, setIsShowEditTermsModal] = useState(false)
  const [isShowRemoveTermsModal, setIsShowRemoveTermsModal] = useState(false)

  const onOpenDetailModal = () => {
    setIsShowEditTermsModal(true)
  }

  const onOpenRemoveModal = () => {
    setIsShowRemoveTermsModal(true)
  }

  return (
    <>
      <Table
        headerList={getTableData(onOpenDetailModal, onOpenRemoveModal)}
        data={DUMMY_DATA}
      />

      <EditTermsModal
        isShow={isShowEditTermsModal}
        onClose={() => setIsShowEditTermsModal(false)}
      />

      <RemoveTermsModal
        isShow={isShowRemoveTermsModal}
        onClose={() => setIsShowRemoveTermsModal(false)}
      />
    </>
  )
}

export default TermsTable
