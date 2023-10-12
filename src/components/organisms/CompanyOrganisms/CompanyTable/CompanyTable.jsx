'use client'

import { useState } from 'react'

import { Table } from '@atom/index'

import {
  DUMMY_DATA,
  getTableData,
  DetailCompanyModal,
  RemoveCompanyModal,
} from './resources'

const CompanyTable = () => {
  const [isShowDetailModal, setIsShowDetailModal] = useState(false)
  const [isShowRemoveModal, setIsShowRemoveModal] = useState(false)

  const onOpenDetailModal = () => {
    setIsShowDetailModal(true)
  }

  const onOpenRemoveModal = () => {
    setIsShowRemoveModal(true)
  }

  return (
    <>
      <Table
        headerList={getTableData(onOpenDetailModal, onOpenRemoveModal)}
        data={DUMMY_DATA}
      />

      <DetailCompanyModal
        isShow={isShowDetailModal}
        onClose={() => setIsShowDetailModal(false)}
      />

      <RemoveCompanyModal
        isShow={isShowRemoveModal}
        onClose={() => setIsShowRemoveModal(false)}
      />
    </>
  )
}

export default CompanyTable
