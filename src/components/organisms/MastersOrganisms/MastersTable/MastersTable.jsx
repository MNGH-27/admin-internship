'use client'

import { useState } from 'react'

import { Table } from '@atom/index'

import {
  DUMMY_DATA,
  getTableData,
  EditMasterModal,
  RemoveMasterModal,
} from './resources'

const MastersTable = () => {
  const [removeMaster, setRemoveMaster] = useState({
    isShow: false,
    data: {},
  })

  const [editMaster, setEditMaster] = useState({
    isShow: false,
    data: {},
  })

  const onOpenRemoveMasterModal = (data) => {
    setRemoveMaster({
      isShow: true,
      data,
    })
  }

  const onOpenEditMasterModal = (data) => {
    setEditMaster({
      isShow: true,
      data,
    })
  }

  return (
    <>
      <Table
        headerList={getTableData(
          onOpenRemoveMasterModal,
          onOpenEditMasterModal,
        )}
        data={DUMMY_DATA}
      />

      <EditMasterModal
        isShow={editMaster.isShow}
        onClose={() => setEditMaster({ isShow: false })}
        data={editMaster.data}
      />

      <RemoveMasterModal
        isShow={removeMaster.isShow}
        onClose={() => setRemoveMaster({ isShow: false })}
        data={removeMaster.data}
      />
    </>
  )
}

export default MastersTable
