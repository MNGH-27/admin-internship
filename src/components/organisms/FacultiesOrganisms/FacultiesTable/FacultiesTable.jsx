'use client'

import { useState } from 'react'

import { Table } from '@atom/index'

import {
  DUMMY_DATA,
  getTableData,
  EditFacultiesModal,
  RemoveFacultiesModal,
} from './resources'

const FacultiesTable = () => {
  const [isShowEditFacultiesModal, setIsShowEditFacultiesModal] =
    useState(false)
  const [isShowRemoveFacultiesModal, setIsShowRemoveFacultiesModal] =
    useState(false)

  const onOpenDetailModal = () => {
    setIsShowEditFacultiesModal(true)
  }

  const onOpenRemoveModal = () => {
    setIsShowRemoveFacultiesModal(true)
  }

  return (
    <>
      <Table
        headerList={getTableData(onOpenDetailModal, onOpenRemoveModal)}
        data={DUMMY_DATA}
      />

      <EditFacultiesModal
        isShow={isShowEditFacultiesModal}
        onClose={() => setIsShowEditFacultiesModal(false)}
      />

      <RemoveFacultiesModal
        isShow={isShowRemoveFacultiesModal}
        onClose={() => setIsShowRemoveFacultiesModal(false)}
      />
    </>
  )
}

export default FacultiesTable
