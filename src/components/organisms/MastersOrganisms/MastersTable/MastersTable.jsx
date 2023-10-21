'use client'

import { useState } from 'react'

import { Table } from '@atom/index'

import { useQuery } from 'react-query'

import {
  DUMMY_DATA,
  getTableData,
  EditMasterModal,
  RemoveMasterModal,
} from './resources'
import { getMasterListHttp } from '@core/services'

const MastersTable = () => {
  const [removeMaster, setRemoveMaster] = useState({
    isShow: false,
    data: {},
  })

  const [editMaster, setEditMaster] = useState({
    isShow: false,
    data: {},
  })

  const { data: masterList, isLoading: isLoadingMasterList } = useQuery({
    queryKey: ['master_list'],
    queryFn: getMasterListHttp,
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
        rowKey={(record) => record.id}
        loading={isLoadingMasterList}
        headerList={getTableData(
          onOpenRemoveMasterModal,
          onOpenEditMasterModal,
        )}
        pagination={{}}
        data={masterList?.data?.master}
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
